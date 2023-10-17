<?php
  return array(
    "name" => __( "Section Title", "salient-child" ),
    "base" => "section_title",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/section-title.php',
    "params" => array(
      array(
        "type" => "textfield",
        "heading" => __( "Number", "salient-child" ),
        "param_name" => "number",
        "value" => __( "", "my-text-domain" )
      ),
      array(
        "type" => "textfield",
        "heading" => __( "Title", "salient-child" ),
        "param_name" => "title",
        "value" => __( "", "my-text-domain" )
      ),
      array(
        "type" => "vc_link",
        "heading" => __( "Link", "salient-child" ),
        "param_name" => "link",
        )
      )
  );
