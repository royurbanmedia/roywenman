<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'bxslider-css', '//cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css' );

    wp_enqueue_style( 'fontawesome-css', '//use.fontawesome.com/releases/v5.1.1/css/all.css' );

    wp_enqueue_script('bxslider-js', '//cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js', array('jquery'));

    $templateURL = get_stylesheet_directory_uri();

    wp_localize_script( 'bxslider-js', 'php', $templateURL );

    wp_enqueue_script('bxslider-config', get_stylesheet_directory_uri() . '/js/bxslider-config.js', array('jquery', 'bxslider-js'));

    wp_enqueue_script('particles-js', '//cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js');
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
