<?php
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

extract(shortcode_atts(array(
    'title' => '',
    'link' => '',
), $atts));

$link_obj = vc_build_link($link);

// Social media links
$uploads = wp_upload_dir();
$linkedin_relative_path = str_replace(home_url(), '', $uploads['baseurl']) . '/2023/10/icon-linkedin.svg';
$instagram_relative_path = str_replace(home_url(), '', $uploads['baseurl']) . '/2023/10/icon-instagram.svg';
$behance_relative_path = str_replace(home_url(), '', $uploads['baseurl']) . '/2024/01/icon-behance.svg';

echo '<div class="footer-card">
    <h5>' . $title . '</h5>
    <hr>';

if ($link) {
    echo '<a href="' . $link_obj['url'] . '" target="' . $link_obj['target'] . '">' . $link_obj['title'] . '</a>';
} else {
    echo '<ul>
      <li>
        <a href="/" target="_blank" title="Instagram">
          <img src="' . $instagram_relative_path . '" alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" title="LinkedIn">
          <img src="' . $linkedin_relative_path . '" alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" title="Behance">
          <img src="' . $behance_relative_path . '" alt="Behance" />
        </a>
      </li>
    </ul>';
}

echo '</div>';
?>
