<?php
  return array(
    "name" => __( "Paragraphs", "salient-child" ),
    "base" => "paragraphs",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/paragraphs.php',
    "params" => array(
      array(
        "type" => "textarea",
        "heading" => __( "Left Paragraph", "salient-child" ),
        "param_name" => "p_left",
        "value" => __( "", "my-text-domain" )
      ),
      array(
        "type" => "textarea",
        "heading" => __( "Right Paragraph", "salient-child" ),
        "param_name" => "p_right",
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
        'param_name' => 'p_style',
        'value' => array(
            'Small' => 'o-3 w-4',
            'Large' => 'o-2 w-5',
        ),
        'description' => 'Choose one of the two options.',
        'std' => 'Small',
      )
    )
  );
