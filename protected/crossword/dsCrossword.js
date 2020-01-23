;(function($, window, document, undefined) {	
	
	var defaults = {
		itemsSource				: [], // array or ajax url
		readonly				: false, 
		responsive				: true,
		saveState				: true,	
		liveValidation			: true,	
		liveValidationDelay		: 500,
		cluesPosition			: 'right', // right|left|top|bottom|false -> hide
		activeCluePosition		: 'top', // top|bottom|false -> hide
		allowNumInput			: false, // allow numeric input to puzzle
		initAnswers				: null,
		colors : {	
			puzzleBg			: '', 
			puzzleFont			: '',
			active				: '', 
			selected			: '' 
		},
		lang : {
			acrossCluesTitle	: 'Across',
			downCluesTitle		: 'Down'
		},
		// Callbacks
		onInit: null, onPuzzleCreated: null	
	};
	
	/** Create Plugin instance */
	function Plugin(element, options) {
		this.opt 	= $.extend( {}, defaults, options );
		this.wrpDiv = $(element);
		this.puzDiv = null;
		this.puzTbl	= null;
		this.cluDiv = null;
		this.items	= {};
		this.init();
	}
	
	Plugin.prototype = {
		
		/** Initialize plugin */
		init: function() {
			var $t = this;
			
			// Call "onInit" callback			
			if ( $.type($t.opt.onInit) === 'function' ) {
				$t.opt.onInit();
			}
			
			$t.wrpDiv.addClass('dsCrossword-wrapper')
			  .html('<div class="dsCrossword-puzzle"><table></table></div>');
			$t.puzDiv = $('.dsCrossword-puzzle:first', $t.wrpDiv);
			$t.puzTbl = $('table:first', $t.puzDiv); 
					 
			// add "responsive" class to wrapper if "responsive" option true 
			if ( $t.opt.responsive ) {
	 	    	$t.wrpDiv.addClass('responsive');
	 	    }	
	 	    
	 	    // Create active clue box if "activeCluePosition"  option not false 	
	 	    if ( $t.opt.activeCluePosition != false ) {
	 	    	var activeClueBox = '<div class="active-clue-box"></div>';
	 	    	if ( $t.opt.activeCluePosition == 'top' ) {
	 	    		$t.puzDiv.prepend( activeClueBox );
	 	    	} else {
	 	    		$t.puzDiv.append( activeClueBox );
	 	    	}
	 	    	$t.actCluDiv = $('.active-clue-box', $t.wrpDiv);
	 	    }
	 	    
	 	    // create clues div if "cluesPosition" option not false 	    
	 	    if ( $t.opt.cluesPosition != false ) {
	 	    	$t.wrpDiv.addClass('clues-' + $t.opt.cluesPosition);
	 	    	$t.wrpDiv.append('<div class="dsCrossword-clues">' +
	 	    		'<div class="across-clues clues-box"><h3>' +$t.opt.lang.acrossCluesTitle+ '</h3><ol></ol></div>' +
	 	    		'<div class="down-clues clues-box"><h3>' +$t.opt.lang.downCluesTitle+ '</h3><ol></ol></div>' +
	 	    	'</div>');
	 	    	$t.cluDiv = $('.dsCrossword-clues:first', $t.wrpDiv); 
	 	    }	  	    	
	 	    
	 	    // apply custom colors 
	 	    var customColors = [];
	 	    if ( $t.opt.colors.puzzleBg != '' ) {
	 	   		customColors.push('.dsCrossword-puzzle table {background-color:' + 
	 	   			$t.opt.colors.puzzleBg + '}');
	 	    }
	 	    if ( $t.opt.colors.puzzleFont != '' ) {
	 	   		customColors.push('.dsCrossword-puzzle td input, .dsCrossword-puzzle td .cell-num ' +
	 	   			'{color:' + $t.opt.colors.puzzleFont + '}');
	 	    }
	 	    if ( $t.opt.colors.active != '' ) {
	 	    	customColors.push('.dsCrossword-puzzle td.active input, .dsCrossword-clues li.active '+
	 	    		'{background-color:' + $t.opt.colors.active + '}');
	 	    }
	 	    if ( $t.opt.colors.selected != '' ) {
	 	    	customColors.push('.dsCrossword-puzzle td.selected input {background-color:' +
	 	    		$t.opt.colors.selected + ' !important}');
	 	    }
	 	    if ( customColors.length > 0 ) {
	 	    	$('<style type="text/css">' +customColors.join('\n')+ '</style>').appendTo('head');	
	 	    }			
						 
			// Build contents 				 
			$t._getItems( function(items) {
				$t._buildItems(items)._buildTable()._buildPuzzle()._addEvents(); 
				
				// if "saveState" option true then load previous state (if exists) 
				if ( $t.opt.saveState ) {
					var savedState = $t._loadState();
					$t.setAnswer( savedState ).validate();
				}
				// set initial answers 
				if ( $.type( $t.opt.initAnswers ) === 'object' ) {
					$t.setAnswer( $t.opt.initAnswers ).validate();
				}
				
				if ( $t.opt.readonly ) {
					$t.disableInput();
				} else {
					$('td.has-input:first', $t.puzTbl).find('input').trigger('click');
				}				
			});
		},
		
		/**		 
		 * Set answer of specific id / (number-direction) 
		 * @param idOrNumDir (int) item_id or (string) [number]-[direction]
		 * for multiple answer, leave "answer" param empty and "idOrNumDir" as object
		 */
		setAnswer: function(idOrNumDir, answer) {
			var $t = this, sets = {};
			if ( $.type(idOrNumDir) === 'object' ) {
				sets = idOrNumDir;
			} else {
				sets[idOrNumDir] = answer;
			}
			$.each(sets, function(id, answer) {
				var td, num, dir, num_dir = id.toString().split('-');
				if ( num_dir.length > 1 ) {
					id = $t._getIdByNumDir( num_dir[0], num_dir[1] );
				}
				$t.allTD.filter('.item-' + id).each(function(i) {
					var s = answer.substr(i, 1).replace('_', '');
					$(this).find('input').val(s);					
				});
			});
			return this;
		},
		
		/** Validate answer */
		validate: function() {
			var $t = this, currAnswer, td;
			$.each( $t.items.data, function(i, item) {
				currAnswer = '';
				td = $t.allTD.filter('.item-' + item.item_id);
				td.each(function() {
					currAnswer += $(this).find('input').val().toLowerCase();
				});
				if ( currAnswer == item.answer.toLowerCase() ) { 
					td.addClass('done-' + item.item_id);
					if ( $t.clueDiv ) {
						$t.allLI.filter('[data-item-id="' +item.item_id+ '"]').addClass('done');
					}					
				} else {
					td.removeClass('done-' + item.item_id);
					if ( $t.clueDiv ) {
						$t.allLI.filter('[data-item-id="' +item.item_id+ '"]').removeClass('done');
					}
				}
			}); 
		},
		
		/** Get all answer in json format: [item_id]:[answer] */
		serialize: function() {
			var $t = this, pdata = {};
			$.each( $t.items.data, function(i, item) {
				var answer = '';
				$('td.item-' +item.item_id+' input', $t.puzTbl).each(function() {
					var val = $(this).val().toLowerCase();
					if ( val == '' ) val = '_';
					answer += val;
				});
				pdata[item.item_id] = answer;
			});
			return pdata;
		},
		
		/** Reset all answer */
		reset: function() {
			$('input', this.puzTbl).val('');
			$('td.has-input:first', $t.puzTbl).find('input').trigger('click');
			return this;
		},
		
		/** Disable all input and functionality */
		disableInput: function() {
			this.opt.readonly = true;
			$('input', this.puzTbl)
				.prop('disabled', true)
				.parent().removeClass('active selected');
			$('li', this.cluDiv).removeClass('active');			
			return this;
		},
		
		/** Enable all input and functionality */
		enableInput: function() {
			this.opt.readonly = false;
			$('input', this.puzTbl).prop('disabled', false);
			$('td.has-input:first', $t.puzTbl).find('input').trigger('click');			
			return this;
		},
		
		/** Toggle enable/disable */
		toggleDisabled: function() {
			if ( this.opt.readonly == true ) {
				this.enableInput();
			} else {
				this.disableInput();
			}
			return this;
		},
		
		/** Sort items and add additional properties */
		_buildItems: function(items) {
			var $t = this;
			// sort items by cell coords
			items.sort(function(a, b) {
				return (a.start_y - b.start_y) || (a.start_x - b.start_x);
			});
			// get "end_x" and "end_y", maxCol and maxRow
			var maxCol = 1, maxRow = 1, num = 1, coordsNum = {} 
			$.each( items, function(idx, item) {
				var len = item.hasOwnProperty('answer') ? item.answer.length : item.answer_length;
				item.end_x = item.direction == 'across' ? item.start_x + len - 1 : item.start_x;
				item.end_y = item.direction == 'down' ? item.start_y + len - 1 : item.start_y;
				if ( item.direction == 'across' ) {
					if ( maxCol < (item.end_x + 1) ) maxCol = item.end_x + 1;
				} else {
					if ( maxRow < (item.end_y + 1) ) maxRow = item.end_y + 1;
				}
				item.index = idx;
				// add "number" and "coords" property to item 
				var coords = item.start_x + '_' + item.start_y;
				item.coords = coords;
				if ( coordsNum.hasOwnProperty(coords) ) {
					item.number = coordsNum[coords];
				} else {
					item.number = num;
					coordsNum[coords] = num;
					num++;
				}				
			});
			$t.items = {
				data	  : items,
				length	  : items.length,
				activeIdx : 0,
				activeDir : items[0].direction,
				maxCol 	  : maxCol,
				maxRow	  : maxRow
			};
			//console.log( JSON.stringify(items) );
			return this;
		},
		
		/** Get items either from array variable or ajax */
		_getItems: function(callback) {
			var $t = this;
			if ( $.type( $t.opt.itemsSource ) === 'array' ) {
				var items = $t.opt.itemsSource;
				if ( $.type( callback ) === 'function' ) {
					callback( items );
				}
			} else {
				$.ajax({
					type	 : 'GET',
					url		 : $t.opt.itemsSource,
					dataType : 'json',
					success	 : function( items ) {
						if ( $.type( callback ) === 'function' ) { 
							callback( items );
						}
					},
					error	 : function() {
						$.error('Error requesting page ' + $t.opt.itemsSource);
					}
				});
			}
			return this;
		},
		
		/** Build table rows and columns */
		_buildTable: function() {
			var $t = this, tblContent = '';	
			for ( var r = 0; r < $t.items.maxRow; r++ ) {
				tblContent += '<tr>';
				for ( var c = 0; c < $t.items.maxCol; c++ ) {
					var coords = c + '_' + r;
					tblContent += '<td data-coords="' +coords+ '"></td>';
				}
				tblContent += '</tr>';
			}
			$t.puzTbl.html(tblContent);
			$t.allTD = $('td', $t.puzTbl);	
			if ( $t.actCluDiv ) {
				$t.actCluDiv.outerWidth( $t.puzTbl.width() );
			}		
			return this;
		},
		
		/** Build puzzle entries */
		_buildPuzzle: function() {
			var $t = this;
			$.each( $t.items.data, function(i, item) {	
				var td; 		
				if ( item.direction == 'across' ) {
					td = $('tr:eq(' +item.start_y+ ')', $t.puzTbl).children()
						 .slice(item.start_x, item.end_x+1);			
				} else {
					td = $('tr', $t.puzTbl).slice(item.start_y, item.end_y+1)
						 .find('td:eq(' +item.start_x+ ')');							
				}
				td.addClass(item.direction)
				  .attr( 'data-' +item.direction+ '-id', item.item_id )
				  //.attr( 'data-item-number', item.number )
				  .filter( ':empty').html('<input type="text" size="1" maxlength="1" tabindex="-1" value="">' ).end()
				  .addClass( 'has-input item-' +item.item_id).first().each( function() {
					  $(this).addClass( 'start-point ' +item.direction+ '-start' );
					  // add cell number if don't exists yet 
					  if ( !$(this).find('span').length ) {
						  $(this).prepend( '<span class="cell-num">' +item.number+ '</span>' );
					  }
				});	
				// build clue item
				$t._buildClueItem( item );						
			});				
			if ( $t.cluDiv ) {
				$t.allLI = $('li', $t.cluDiv);	
			}
				
			// call "onPuzzleCreated" callback 
			if ( $.type($t.opt.onPuzzleCreated) === 'function' ) {
				$t.opt.onPuzzleCreated();
			}			
			return this;
		},
		
		/** Build clue list */
		_buildClueItem: function(item) {
			var $t = this;
			if ( !$t.cluDiv ) return false;
			$('.' +item.direction+ '-clues > ol', $t.cluDiv).append(
				'<li data-item-id="' +item.item_id+ '" data-coords="' +item.coords+ '" data-dir="' +
					item.direction+ '" value="' +item.number+ '">' +
					'<span class="clue-num">' +item.number+ '.</span>' +item.clue+ 
				'</li>');
			return this;
		},
		
		/** Add input and clues events */		
		_addEvents: function() {
			var $t = this;			
			// add events to text input
			$t.puzTbl.on({
				'keydown': function(e) {	 				
					var keyIs = $t._keyIs( e.which ); 
					if ( keyIs != 'not-allowed' ) {		 			
						switch( keyIs ) {
							case 'enter': 
								e.preventDefault(); 
								$(this).trigger('click');
							break;
							case 'tab': // tab/(shift+tab) key: next/previous number
								e.preventDefault(); 
								var dir = $t.items.activeDir,
									allPos = $t.allTD.filter('.' +dir+ '-start'),
									currPos = $t.allTD.filter('.active:first');
								if ( e.shiftKey ) {
									var prevPos = allPos.filter(':lt(' +allPos.index(currPos)+ ')').last();
									if ( !prevPos.length ) {
										dir = dir == 'across' ? 'down' : 'across';
										prevPos = $t.allTD.filter('.' +dir+ '-start').last();
									}
									var item_id = prevPos.attr('data-' +dir+ '-id');
								} else {
									var nextPos = allPos.filter(':gt(' +allPos.index(currPos)+ ')').first();
									if ( !nextPos.length ) {
										dir = dir == 'across' ? 'down' : 'across';
										nextPos = $t.allTD.filter('.' +dir+ '-start').first();
									}
									var item_id = nextPos.attr('data-' +dir+ '-id');
								}
								$t._setActiveItem( item_id ); 					
							break;	
							case 'numeric':
								if ( $t.opt.allowNumInput == false ) {
									e.preventDefault();
								}
							break;						
							case 'home-end': // home/end: goto first/last cell of active row/column
								e.preventDefault(); 
								$(this).parent().removeClass('selected');
								var pos = e.which == 36 ? 'first' : 'last';
								$('td.active:' +pos, $t.puzTbl).addClass('selected').find('input').select(); 
							break;
						}
					} else {
						e.preventDefault(); 
					}
				},
				'keyup': function(e) {
					var keyIs = $t._keyIs( e.which );
					switch( keyIs ) {
						case 'alpha': case 'numeric':		
							if ( $(this).val() != '' ) {
								$t._nextPrevCell(e); 						
							}
						break;
						case 'bsp': case 'del': case 'arrow':
							$t._nextPrevCell(e);									
						break;
						default:
							e.preventDefault();
					}
					if ( $.inArray(keyIs, ['alpha','numeric','bsp','del']) > -1 ) {
						// Run live validation
						if ( $t.opt.liveValidation ) {	
							window.clearTimeout( $t.lvTimeout );
							$t.lvTimeout = window.setTimeout( function() {
								$t.validate();
							}, $t.opt.liveValidationDelay );
						} 
						// Save state
						if ( $t.opt.saveState ) {
							window.clearTimeout( $t.ssTimeout );
							$t.ssTimeout = window.setTimeout( function() {
								$t._saveState();
							}, 1000 );
						}
					}					
				},
				'click': function(e) { 
					var td  = $(this).parent(),
						dir = td.hasClass('across') ? 'across' : 'down',
						isSelected = td.hasClass('selected'),
						item_id = null;		
					if ( isSelected && td.is('.across.down') ) {
						dir = $t.items.activeDir == 'across' ? 'down' : 'across'; 
					} else if ( td.hasClass('start-point') ) {
						dir = td.hasClass('across-start') ? 'across' : 'down';
					}	
					item_id = td.attr('data-' +dir+ '-id');								
					$t._setActiveItem( item_id );
				}
			}, 'input').on('click', function(e) {
				$(this).find('td.selected input').select();
			});
			
			// add events to clues list (if "cluesPosition" not false)
			if ( $t.cluDiv ) {
				$t.cluDiv.on({
					'click': function(e) {
						if ( $t.opt.readonly ) {
							e.preventDefault();
						}
						var item_id = $(this).attr('data-item-id');
						$t._setActiveItem(item_id);					
					}				
				}, 'li');	
			}			
			
			return this;
		},
		
		/** Go to next/previous cell */
		_nextPrevCell: function(e) {
			var $t = this,
				currTD, dir = 'across',
				td = $(e.target).parent(),
				tr = $(e.target).closest('tr'),
				keyIs = $t._keyIs(e.which);
			switch ( e.which ) {
				case 37:  // left 		
					currTD = td.prev(); break;
				case 38: // up
					currTD = tr.prev().find('td:eq(' +td.index()+ ')'); 
					dir = 'down'; break;
				case 39: // right
					currTD = td.next(); break;
				case 40: // down
					currTD = tr.next().find('td:eq(' +td.index()+ ')'); 
					dir = 'down'; break;
				case 8: // backspace
					var activeTD = $('td.active', $t.puzTbl);  
					currTD = activeTD.filter(':lt(' +activeTD.index(td)+ '):last'); break;		
				default: 
					// char keys goto next active td
					var activeTD = $('td.active', $t.puzTbl);  
					currTD = activeTD.filter(':gt(' +activeTD.index(td)+ '):first');
			}
			if ( currTD.length && currTD.hasClass('has-input') ) {
				$t.allTD.removeClass('selected');
				if ( dir == 'down' && !currTD.hasClass('down') ) {
					dir = 'across'; 
				}
				currTD.addClass('selected').find('input').select();
				if ( !currTD.hasClass('active') ) {
					$t._setActiveItem( currTD.attr('data-' +dir+ '-id') );	
				} 
			}			
			return this;
		},
		
		/** 		 
		 * Set active row/column 
		 * @param idOrNumDir (int) item_id or (string) [number]-[direction]
		 */
		_setActiveItem: function(idOrNumDir) { 
			var $t = this, 	
				focusTD  = null,
				currItem = null,
				item_id  = idOrNumDir,	
				num_dir  = idOrNumDir.split('-');
			if ( num_dir.length > 1 ) {
				item_id = $t._getIdByNumDir( num_dir[0], num_dir[1] );
			}	
			currItem = $t._getItemById( item_id );
			focusTD = $t.allTD.removeClass('active selected')
			    .filter('.item-' +item_id)
				.addClass('active').has('input:focus');	
			if ( focusTD.length ) {
				focusTD.addClass('selected');
			} else {
				$t.allTD.filter('.active:first').addClass('selected').find('input').select();
			}						
			// Highlight and croll to active clue 
			if ( $t.cluDiv ) {
				$t.allLI.removeClass( 'active' ) 
					.filter('[data-item-id="' +item_id+ '"]') 
					.addClass('active'); 
				$t._scrollToActiveClue();
			}			
			// set active clue box
			if ( $t.actCluDiv ) {				
				$t.actCluDiv.text( currItem.number + '. ' + currItem.clue );
			}	
			$t.items.activeDir = currItem.direction;
			$t.items.activeIdx = currItem.index;
			return this;		
		},
		
		_scrollToActiveClue: function() {
			var $t  = this;
			if ( !$t.cluDiv ) return false;
			var li  = $('li.active', $t.cluDiv),
				ol  = li.parent(),
				sTp = li.position().top - li.outerHeight(),
				gap = null; 
			if ( li.position().top < 0 ) {
				gap = ol.scrollTop() + li.position().top;
				ol.animate({ scrollTop: gap }, 200);
			} else if ( (li.position().top + li.outerHeight()) > ol.height() ) {
				gap = ol.scrollTop() + ( li.position().top - ol.outerHeight()) + li.outerHeight();
				ol.animate({ scrollTop: gap }, 200);
			}	
			return this;		
		},
		
		_keyIs: function(keyCode) {
			switch(true) {
				case (keyCode >= 65 && keyCode <= 90) :
					return 'alpha'; break;
				case (keyCode >= 48 && keyCode <= 57) :
					return 'numeric'; break;
				case (keyCode >= 37 && keyCode <= 40) :
					return 'arrow'; break;
				case (keyCode == 35 || keyCode == 36) :
					return 'home-end'; break;
				case (keyCode == 8)  : 
					return 'bsp'; break; // backspace
				case (keyCode == 9)  : 
					return 'tab'; break;
				case (keyCode == 13) : 
					return 'enter'; break;
				case (keyCode == 16) : 
					return 'shift'; break;
				case (keyCode == 17) : 
					return 'ctrl'; break;
				case (keyCode == 18) :  
					return 'alt'; break;
				case (keyCode == 46) : 
					return 'del'; break;
				default:
					return 'not-allowed';
			}
		},
		
		/** Save state to local storage  */		
		_saveState: function() {
			var $t = this
				id = $t._generateUniqueID();			
			localStorage.setItem( id, JSON.stringify($t.serialize() ) );
			return this;
		},
		
		/** Load previous state if exists. */
		_loadState: function() {
			var $t = this,
				id = $t._generateUniqueID(),
				items = localStorage.getItem(id);
			if (items) {
				return JSON.parse(items);
			}
			return false;
		},
		
		/** Get unique id by current url + current element id/class/tag */
		_generateUniqueID: function() {
			var url = window.location.href.split('?')[0],
				elm = this.wrpDiv.attr('id') || this.wrpDiv.attr('class') || this.wrpDiv.prop('tagName') || '';
				id  = url.split('//')[1] + '_' + elm;
			return id.replace(/\ |\//g, '_');
		},
		
		_getItemById: function(item_id) {
			var $t = this,
				result = $.grep( $t.items.data, function(e) { 
					return e.item_id == item_id; 
				});
			return !result.length ? false : result[0];
		},
		
		/*_getIndexById: function(item_id) {
			var $t = this, index = -1;
				$.each( $t.items.data, function(i, item) {
					if ( item.item_id == item_id ) {
						index = i;
						return false;
					}
				});
			return index;
		},*/
		
		_getIdByNumDir: function(number, direction) {
			var $t = this,
				result = $.grep( $t.items.data, function(e) { 
					return (e.number == number) && (e.direction == direction); 
				});
			return !result.length ? false : result[0].item_id;
		}
	};
		
	$.fn.dsCrossword = function(params) 
	{
		var puzzleElms = this, returnVal = this;
		puzzleElms.each(function() {
			var plugin = $(this).data('dsCrossword');
			if ( !plugin ) {
				$(this).data('dsCrossword', new Plugin(this, params));
			} else {
				if ( $.type(params)  === 'string' && params.substring(0,1) != '_' && 
					$.type( plugin[params] )  === 'function' ) {
					returnVal = plugin[params]();
				} else {
					$.error('dsCrossword - Unknown arguments');
				}
			}
		});
		return returnVal || puzzleElms;
	};
	
})(window.jQuery, window, document);