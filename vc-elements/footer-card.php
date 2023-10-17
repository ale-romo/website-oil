<?php
  return array(
    "name" => __( "Footer Card", "salient-child" ),
    "base" => "footer_card",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/footer-card.php',
    "params" => array(
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
        ),
      )
    );
