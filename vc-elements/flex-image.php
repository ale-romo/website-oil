<?php
  return array(
    "name" => __( "Flex Image", "salient-child" ),
    "base" => "flex_image",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/flex-image.php',
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
        'type' => 'dropdown',
        'heading' => 'Choose an Image style',
        'param_name' => 'img_layout',
        'value' => array(
            'full' => '',
            '3/7' => 'o-3 w-7',
            '0/10' => 'w-10',
            '2/8' => 'o-2 w-8',
            '2/9' => 'o-2 w-9',
        ),
        'std' => 'full',
      ),
    )
  );
