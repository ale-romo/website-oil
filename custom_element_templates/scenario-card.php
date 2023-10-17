<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'title' => '',
  'description' => '',
  'link' => '',

), $atts));

$link_obj = vc_build_link($link);

echo '<div class="scenario-card">
  <div>
    <h4>'.$title.'</h4>
    <hr>
    <p>'.$description.'</p>
    <div>
      <a class="regular-button" href="'.$link_obj['url'].'" target="'.$link_obj['target'].'">'.$link_obj['title'].'</a>
    </div>
  </div>
</div>';
