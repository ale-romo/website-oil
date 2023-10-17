<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'title' => '',

), $atts));

echo '<div class="page-title"><h2>'.$title.'</h2><hr></div>';
