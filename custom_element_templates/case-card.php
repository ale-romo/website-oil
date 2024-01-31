<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

extract(shortcode_atts(array(
  'title' => '',
  'category' => '',
  'slogan' => '',
  'description' => '',
  'image_id' => '',
  'link' => '',
  'img_style' => '',

), $atts));

$image_srcset = wp_get_attachment_image_srcset($image_id);
$image_src = wp_get_attachment_image_url($image_id, 'full');
$link_obj = vc_build_link($link);

echo '<div class="case-card"><div class="popup-hover">goto: /'.$title.'</div><a href="'.$link_obj['url'].'" target="'.$link_obj['target'].'">'.
($title ? '<h2>'.$title.'</h2>' : '').
  '<hr class="hidden-md">'.
  ($image_id ? '<img class="'.$img_style.'" src="'. esc_url($image_src).'" srcset="' . esc_attr($image_srcset) .'" />' : '').
  '<hr class="visible-md">
  <div>'.
    ($category ? '<p class="details">'.$category.'</p>' : '').
    ($slogan ? '<h4>'.$slogan.'</h4>' : '').
    ($description ? '<p class="visible-md">'.$description.'</p>' : '').
  '</div>'.
  ($link ? '<a class="regular-button" href="'.$link_obj['url'].'" target="'.$link_obj['target'].'">'.$link_obj['title'].'</a>' : '').
'</a></div>';
