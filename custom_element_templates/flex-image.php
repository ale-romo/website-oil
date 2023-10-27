<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'image_id' => '',
  'img_layout' => '',
  'title' => '',

), $atts));

$image_srcset = wp_get_attachment_image_srcset($image_id);
$image_src = wp_get_attachment_image_url($image_id, 'full');

echo '<div class="flex-image '.$img_layout.'"><img src="'.esc_url($image_src).'" srcset="'. esc_attr($image_srcset).'" title="'.
($title ? $title : '').'"/></div>';
