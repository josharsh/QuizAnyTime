<?php
$items  = array(
    array(
        'item_id'   => 1,
        'direction' => 'across',
        'clue'      => 'PR',
        'answer'    => 'sarthak',
        'start_x'   => 0,
        'start_y'   => 6
    ),
    array(
        'item_id'   => 2,
        'direction' => 'down',
        'clue'      => 'Events',
        'answer'    => 'somansh',
        'start_x'   => 4,
        'start_y'   => 0
    ),
    array(
        'item_id'   => 3,
        'direction' => 'down',
        'clue'      => 'Working-committee',
        'answer'    => 'prakrit',
        'start_x'   => 6,
        'start_y'   => 3
    ),
    array(
        'item_id'   => 4,
        'direction' => 'down',
        'clue'      => 'Technical',
        'answer'    => 'aditya',
        'start_x'   => 1,
        'start_y'   => 6
    ),
    array(
        'item_id'   => 5,
        'direction' => 'across',
        'clue'      => 'Secretary',
        'answer'    => 'arun',
        'start_x'   => 1,
        'start_y'   => 11
    ),
    array(
        'item_id'   => 6,
        'direction' => 'across',
        'clue'      => 'Editorial',
        'answer'    => 'roop',
        'start_x'   => 3,
        'start_y'   => 1
    )
);
echo json_encode($items);
