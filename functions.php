<?php

add_action( 'wp_enqueue_scripts', 'salient_child_enqueue_styles', 100);

function salient_child_enqueue_styles() {

	$nectar_theme_version = nectar_get_theme_version();
	wp_enqueue_style( 'salient-child-style', get_stylesheet_directory_uri() . '/style.css', '', $nectar_theme_version );

    if ( is_rtl() ) {
   		wp_enqueue_style(  'salient-rtl',  get_template_directory_uri(). '/rtl.css', array(), '1', 'screen' );
		}
}


function salient_redux_custom_fonts() {
    return array(
        'Custom Fonts' => array(
            'EBGaramond' => 'EBGaramond',
            'PP-Telegraf' => 'PP-Telegraf'
        )
    );
}

add_filter( "redux/salient_redux/field/typography/custom_fonts", "salient_redux_custom_fonts" );


function my_scripts_method() {
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/js/custom_script.js',
        array( 'jquery' )
    );
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method');

function salient_child_custom_wpbakery_elements() {
    $vc_elements_path = get_stylesheet_directory() . '/vc-elements/';

    foreach (glob($vc_elements_path . "*.php") as $filename) {
        $element_array = include $filename;
        vc_map($element_array);
    }
}

add_action('vc_before_init', 'salient_child_custom_wpbakery_elements');


// function generate_wpbakery_preview_templates() {
//     // Directory containing your individual element files
//     $dir = get_stylesheet_directory() . '/vc-elements/';
//     // Initialize an empty string for the JS code
//     $js_code = '';

//     // Loop through each file in the directory
//     foreach (glob($dir . "*.php") as $filename) {
//         // Get the content of the file
//         $content = file_get_contents($filename);

//         // Use a regex or other method to extract the 'base' value from vc_map() within the file content
//         // This example assumes a very basic pattern match and will likely need adjustment
//         if (preg_match('/"base"\s*=>\s*"([^"]+)"/', $content, $matches)) {
//             $shortcode_base = $matches[1];
//             $js_code .='document.querySelector()';
//         }
//     }

//     // Output the generated JS code wrapped in a script tag
//     echo "
//         <script>
//             document.addEventListener('DOMContentLoaded', () => {
//                 if (typeof vc !== 'undefined') {
//                     $js_code
//                 }
//             });
//         </script>
//     ";
// }

// add_action('admin_footer', 'generate_wpbakery_preview_templates');

?>
