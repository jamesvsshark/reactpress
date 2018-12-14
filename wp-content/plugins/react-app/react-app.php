<?php
/**
Plugin Name: react-app
Description: This plugin allows you to insert a shortcode into a page to load a react app.
Author: James Simoes <james@pocostud.io>
Version: 1.0
Author URI: http://pocostud.io
*/

if (!defined('ABSPATH'))
    exit;

function react_app_handler($atts) {
    $html = '<div id="react-app-container"></div>';
    return $html;
}

add_shortcode( 'react-app', 'react_app_handler' );

function react_js_script() {
    wp_enqueue_script( 'react_js_script', plugin_dir_url(__FILE__) . 'client/dist/main.js', array (), false, true );
}

add_action( 'wp_enqueue_scripts', 'react_js_script' );
