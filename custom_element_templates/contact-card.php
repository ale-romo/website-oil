<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'title' => '',
  'description' => '',
  'link' => '',
  'hide_description_on_small' => ''
), $atts));

$link_obj = vc_build_link($link);

echo '<div class="contact-card'.($hide_description_on_small ? ' hide-description' : '').'">
    <h3>'.$title.'</h3>
    <hr>
    <p>'.$description.'</p>
    <div>
      <a class="regular-button" href="'.$link_obj['url'].'" target="'.$link_obj['target'].'">'.$link_obj['title'].'</a>
    </div>
</div>';
