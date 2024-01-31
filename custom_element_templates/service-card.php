<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'image_id' => '',
  'title' => '',
  'description' => '',
  'link' => '',

), $atts));

$image_srcset = wp_get_attachment_image_srcset($image_id);
$image_src = wp_get_attachment_image_url($image_id, 'full');
$link_obj = vc_build_link($link);

echo '<div class="service-card">
            <div>
            <div class="popup-hover">goto: /'.$title.'</div>
            <a href="'.$link_obj['url'].'" target="'.$link_obj['target'] .'">
                <img src="'. esc_url($image_src).'" srcset="' . esc_attr($image_srcset) .'" />
                <h4>'.$title.'</h4>
                <hr>
                <p>'.$description.'</p>
              </a>
            </div>       
      </div>';
