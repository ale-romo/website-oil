<?php
  return array(
    "name" => __( "Service Card", "salient-child" ),
    "base" => "service_card",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/service-card.php',
    "params" => array(
      array(
        "type" => "attach_image",
        "heading" => __( "Image", "salient-child" ),
        "param_name" => "image_id"
    ),
      array(
        "type" => "textfield",
        "heading" => __( "Title", "salient-child" ),
        "param_name" => "title",
        "value" => __( "", "my-text-domain" )
      ),
      array(
          "type" => "textarea",
          "heading" => __( "Description", "salient-child" ),
          "param_name" => "description",
          "value" => __( "", "my-text-domain" )
        ),
      array(
          "type" => "vc_link",
          "heading" => __( "Link", "salient-child" ),
          "param_name" => "link",
        ),
      )
    );
