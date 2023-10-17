<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'number' => '',
  'title' => '',
  'link' => '',
), $atts));

$link_obj = vc_build_link($link);

echo '<div class="section-title">
  <h5>'.$number.'</h5>
  <hr>
  <h4>'.$title.'</h4>'.
  ($link ? '<a class="regular-button" href="'.$link_obj['url'].'" target="'.$link_obj['target'].'">'.$link_obj['title'].'</a>' : '').
'</div>';
