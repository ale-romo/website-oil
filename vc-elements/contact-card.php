<?php
  return array(
    "name" => __( "Contact Card", "salient-child" ),
    "base" => "contact_card",
    "class" => "",
    "category" => __( "Content", "salient-child"),
    "html_template" => get_stylesheet_directory() . '/custom_element_templates/contact-card.php',
    "params" => array(
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
        "type" => "checkbox",
        "heading" => __( "Hide description on small", "salient-child" ),
        "param_name" => "hide_description_on_small",
        "value" => array( __( "Yes", "my-text-domain" ) => 'true')
      ),
      array(
          "type" => "vc_link",
          "heading" => __( "Link", "salient-child" ),
          "param_name" => "link",
        ),
      )
    );
