<?php
  return array(
    "name" => __( "Page Title", "salient-child" ),
    "base" => "page_title",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/page-title.php',
    "params" => array(
      array(
        "type" => "textfield",
        "heading" => __( "Title", "salient-child" ),
        "param_name" => "title",
        "value" => __( "", "my-text-domain" )
      ),
    ),
  );
