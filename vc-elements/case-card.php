<?php
  return array(
    "name" => __( "Case Card", "salient-child" ),
    "base" => "case_card",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/case-card.php',
    "params" => array(
      array(
        "type" => "textfield",
        "heading" => __( "Title", "salient-child" ),
        "param_name" => "title",
        "value" => __( "", "my-text-domain" )
      ),
      array(
          "type" => "attach_image",
          "heading" => __( "Image", "salient-child" ),
          "param_name" => "image_id"
      ),
      array(
          "type" => "textfield",
          "heading" => __( "Category", "salient-child" ),
          "param_name" => "category",
          "value" => __( "", "my-text-domain" )
        ),
      array(
          "type" => "textfield",
          "heading" => __( "Slogan", "salient-child" ),
          "param_name" => "slogan",
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
      array(
        'type' => 'dropdown',
        'heading' => 'Choose an Option',
        'param_name' => 'img_style',
        'value' => array(
            'Show on large' => '',
            'Hide on large' => 'hide_on_large',
            'Hover on large' => 'hover_on_large',
        ),
        'description' => 'Choose one of the three options.',
      ),
    )
  );
