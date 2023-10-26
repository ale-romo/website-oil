<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'p_left' => '',
  'p_right' => '',
  'p_style' => '',

), $atts));

$p_style = $p_style ? $p_style : 'o-3 w-4';

echo '<div class="paragraphs">
  <h4 class="w-4">'.$p_left.'</h4>
  <div class="'.$p_style.'">'.$p_style.$p_right.'</div>
</div>';
