// ==UserScript==
// @name          kitsu.io dark theme
// @namespace     https://github.com/misarasglow/kitsu-dark
// @description	  Dark Theme For kitsu.io
// @author        AlenasSenpai
// @homepage      https://github.com/misarasglow/kitsu-dark
// @updateURL     https://github.com/misarasglow/kitsu-dark/raw/master/kitsu.io-dark-theme.user.js
// @downloadURL   https://github.com/misarasglow/kitsu-dark/raw/master/kitsu.io-dark-theme.user.js
// @include       http://kitsu.io/*
// @include       https://kitsu.io/*
// @include       http://*.kitsu.io/*
// @include       https://*.kitsu.io/*
// @run-at	  document-body
// @version       1.8.0
// ==/UserScript==
(function() {var css = [
	"/*",
	" * Name:    Kitsu Dark",
	" * Author:  AlenasSenpai",
	" * Version: v1.8.0",
	" * Latest update: 14/01/2017",
	" * Changelog: werejo merge submission and version update",
	"",
	" */",
	"",
	"",
	".add-content-header span[style] {",
	"    color: #f75239;",
	"}",
	"",
	".browse-page .global-container {",
	"    background: #2d2d2d;",
	"    padding-top: 50px;",
	"}",
	"",
	".button--primary {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".button--primary:hover {",
	"    background: #DB2409;",
	"}",
	"",
	".card {",
	"    background: #2d2d2d;",
	"    color: #e5e5e5;",
	"}",
	"",
	".card, .hint-panel, .stream-add-content {",
	"    background: #2d2d2d;",
	"}",
	"",
	".card, .hint-panel, .stream-add-content textarea {",
	"    background: #2d2d2d;",
	"    border: 1px solid #f75239;",
	"    border-radius: 5px;",
	"}",
	"",
	".cover-nav .nav-item {",
	"    background: #f75239;",
	"    border: none;",
	"    border-radius: 0 0 5px 5px;",
	"    margin-right: 5px;",
	"}",
	"",
	".cover-nav .nav-item:hover {",
	"    background: #DB2409;",
	"    text-decoration: underline;",
	"}",
	"",
	".cover-page .transparent .logo g, .cover-page .transparent .navbar-buttons li svg path {",
	"}",
	"",
	".custom-control-description {",
	"    color: #e5e5e5;",
	"}",
	"",
	".dropdown-menu {",
	"    background: #2d2d2d;",
	"    border: 1px solid #f75239;",
	"}",
	"",
	".ember-application {",
	"    background: #1d1d1d;",
	"}",
	"",
	".ember-view h6 {",
	"    color: #e5e5e5;",
	"}",
	"",
	".favorite-series-panel .button--primary {",
	"    background: #e5e5e5;",
	"    border: none;",
	"    color: #f75239;",
	"    font-size: 0.9em;",
	"    padding: 3% 0%;",
	"}",
	"",
	".favorite-series-panel .button--primary:hover {",
	"    background: #f75239;",
	"    border: none;",
	"    color: #e5e5e5;",
	"}",
	"",
	".favorite-series-panel .nav .active {",
	"    background: #f75239;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".favorite-series-panel .nav .nav-link:hover {",
	"    background: #f75239;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".favorite-series-panel .nav-tabs {",
	"    border-bottom: 1px solid #f75239;",
	"}",
	"",
	".feed-actions a {",
	"    color: #e5e5e5;",
	"}",
	"",
	".feed-actions a.active {",
	"    border: 1px solid #f75239;",
	"    color: #f75239;",
	"}",
	"",
	".feed-actions a.active:hover {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".feed-actions a:hover {",
	"    color: #f75239;",
	"}",
	"",
	".feed-actions button {",
	"    background: #f75239;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".form-control {",
	"    color: #e5e5e5;",
	"}",
	"",
	".kitsu-forums {",
	"    list-style-type: none;",
	"    margin-left: -20px;",
	"}",
	"",
	".kitsu-forums li:before {",
	"    color: #f75239;",
	"    content: \"•\";",
	"    padding-right: 5px;",
	"}",
	"",
	".media-browse .box-select .active path {",
	"    fill: #f75239;",
	"    opacity: 1;",
	"}",
	"",
	".media-browse .box-select .active:hover path {",
	"    fill: #e5e5e5;",
	"    opacity: 1;",
	"}",
	"",
	".media-browse .box-select li {",
	"    background: #f75239;",
	"}",
	"",
	".media-browse .box-select li.active {",
	"    background: #e5e5e5;",
	"}",
	"",
	".media-browse .box-select li.active:hover {",
	"    background: #f75239;",
	"    opacity: 1;",
	"}",
	"",
	".media-browse .box-select li:hover {",
	"    background: #e5e5e5;",
	"}",
	"",
	".media-browse .box-select li:hover path {",
	"    fill: #f75239;",
	"    opacity: 1;",
	"}",
	"",
	".media-browse .box-select path {",
	"    fill: #e5e5e5;",
	"    opacity: 1;",
	"}",
	"",
	".media-browse .category-select li .exclude-genre svg {",
	"    fill: #e5e5e5;",
	"}",
	"",
	".media-browse .category-select li .exclude-genre svg:hover {",
	"    fill: #f66;",
	"}",
	"",
	".media-browse .category-select li a {",
	"    background: none;",
	"}",
	"",
	".media-browse .category-select li a:hover {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .category-select li.active a {",
	"    background: #2d2d2d;",
	"}",
	"",
	".media-browse .filter-header .filter-title {",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .filter-header .filter-values {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .filter-legend {",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .filter-legend svg {",
	"    fill: #e5e5e5;",
	"}",
	"",
	".media-browse .filter-options {",
	"    background: #1d1d1d;",
	"    border-left: 1px solid #f75239;",
	"}",
	"",
	".media-browse .filter-widget {",
	"    border-bottom: 1px solid #2d2d2d;",
	"}",
	"",
	".media-browse .media-grid {",
	"    background: #2d2d2d;",
	"    border-right: 1px solid #f75239;",
	"    padding-top: 4px;",
	"}",
	"",
	".media-browse .media-grid .media-posters {",
	"    background: #2d2d2d;",
	"    padding: 75px 13px 75px 267px;",
	"}",
	"",
	".media-browse .media-grid .poster-wrapper .media-title {",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .media-poster-header {",
	"    background: none;",
	"}",
	"",
	".media-browse .media-poster-header .filter-container {",
	"    background: #1d1d1d;",
	"    border: 1px solid #f75239;",
	"    border-radius: 5px;",
	"    margin-left: -13px;",
	"    margin-top: 10px;",
	"    padding: 1% 0%;",
	"}",
	"",
	".media-browse .media-poster-header .search-media svg {",
	"    fill: #e5e5e5;",
	"}",
	"",
	".media-browse .noUi-background, .media-browse .noUi-base {",
	"    background: #2d2d2d;",
	"    border-radius: 10px;",
	"}",
	"",
	".media-browse .noUi-handle, .noUi-connect {",
	"    background: #f75239;",
	"}",
	"",
	".media-browse .noUi-handle:after {",
	"    background: #2d2d2d;",
	"}",
	"",
	".media-browse .rating-select li {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .rating-select li.active {",
	"    background: #e5e5e5;",
	"    color: #f75239;",
	"}",
	"",
	".media-browse .rating-select li.active:hover {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-browse .rating-select li:hover {",
	"    background: #e5e5e5;",
	"    color: #f75239;",
	"}",
	"",
	".media-poster-header, .media-browse .filter-options {",
	"    top: 50px;",
	"}",
	"",
	".navbar {",
	"    background: #1d1d1d;",
	"}",
	"",
	".navbar-light .navbar-brand {",
	"    background: none;",
	"}",
	"",
	".navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {",
	"    background: #e5e5e5;",
	"    border-radius: 4px;",
	"    padding: 2% 8%;",
	"}",
	"",
	".navbar-light .navbar-nav .nav-link {",
	"    color: #e5e5e5;",
	"}",
	"",
	".quick-update {",
	"    background: #2d2d2d;",
	"}",
	"",
	".quick-update-actions {",
	"    border-radius: 6px;",
	"}",
	"",
	".quick-update-item {",
	"    animation-delay: 0s;",
	"    border-radius: 8px;",
	"}",
	"",
	".step {",
	"    color: #f66;",
	"}",
	"",
	".step-status circle {",
	"    fill: #f66;",
	"}",
	"",
	".step.step--complete {",
	"    color: #4CAF50;",
	"}",
	"",
	".step.step--complete circle {",
	"    fill: #e5e5e5;",
	"}",
	"",
	".stream-content-editor {",
	"    color: #e5e5e5;",
	"    margin: 0% 2%;",
	"    padding: 0 10px;",
	"    width: 96%;",
	"}",
	"",
	".tag-media {",
	"    border: 1px solid #f75239;",
	"    border-radius: 5px;",
	"    color: #e5e5e5;",
	"    margin: 0% 2%;",
	"    width: 96%;",
	"}",
	"",
	".tag-media .form-control {",
	"    background: #1d1d1d;",
	"    border-radius: 5px;",
	"}",
	"",
	".tag-media .tag {",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".tag-media .tag:hover {",
	"    background: #f75239;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".tag-media ul li {",
	"    background: #2d2d2d;",
	"    border-radius: 5px;",
	"    border-top: 1px solid #f75239",
	";",
	"}",
	"",
	"ul li a {",
	"    color: #f75239;",
	"    text-decoration: none;",
	"}",
	"",
	"ul li a:hover {",
	"    color: #DB2409;",
	"}",
	"",
	"/* Scrollbar */",
	"",
	"::-webkit-resizer {",
	"    display: none;",
	"}",
	"",
	"::-webkit-scrollbar {",
	"    height: 6px;",
	"    width: 10px;",
	"}",
	"",
	"::-webkit-scrollbar-button {",
	"    display: none;",
	"}",
	"",
	"::-webkit-scrollbar-corner {",
	"    display: none;",
	"}",
	"",
	"::-webkit-scrollbar-thumb {",
	"    background-color: #f75239;",
	"    border-radius: 20px;",
	"}",
	"",
	"::-webkit-scrollbar-track {",
	"    background-color: #111111;",
	"    width: 10px;",
	"}",
	"",
	"::-webkit-scrollbar-track-piece {",
	"    display: none;",
	"}",
	".stream-item, .stream-item-comments ul {",
	"    background: #3d3d3d;",
	"    border: none;",
	"    border-radius: 6px;",
	"    color: #e5e5e5;",
	"}",
	"",
	".stream-item-comments .reply-comment {",
	"    border-color: #f75239;",
	"    margin-bottom: 5px;",
	"}",
	"",
	".add-comment-wrapper .add-comment {",
	"    border-color: #f75239;",
	"}",
	"",
	".stream-error-wrapper {",
	"    background: #f75239;",
	"    padding: 10px 0px;",
	"    border: none;",
	"    border-radius: 6px;",
	"    box-shadow: none;",
	"    color: #e5e5e5;",
	"    font-size: 1.2em;",
	"}",
	"",
	".stream-item--title-block {",
	"    background: none;",
	"}",
	"",
	".aggregate-wrapper .hr {",
	"    background: #f75239;",
	"}",
	"",
	".aggregate-date {",
	"    background: #f75239;",
	"    color: #e5e5e5;",
	"}",
"",
".stream-item.pinned-post {",
"    border: 1px solid #f75239;",
"}",
"",
".stream-item-comments {",
"    background: #3d3d3d;",
"    border-top: 1px solid #f75239;",
"    border-radius: 0px 0px 7px 7px;",
"}",
"",
".stream-item-comments li {",
"    border-bottom: 1px solid #f75239;",
"}",
"",
".media-body .sm-comment-count {",
"    color: #f75239;",
"}",
"",
".media-body .comment-reply {",
"    color: #e5e5e5;",
"    font-size: 1.0em;",
"    background: #f75239;",
"    border-radius: 6px 6px 0px 0px;",
"    position: relative;",
"    padding: 3px 5px 3px 8px;",
"    bottom: -10px;",
"}",
"",
".media-body .comment-reply:hover {",
"    text-decoration: underline;",
"}",
"",
".media-body .comment-time {",
"    color: #e5e5e5;",
"}",
".media-body .comment-actions {", 
"    border-top: 1px solid #f75239;",
"    border-bottom: none;",
"    background-color: #4d4d4d;",
"}",
".stream-item--title-block .author-secondary {",
"    color: #e5e5e5;",
"}",
".tagged-media {",
"    background: #2d2d2d;",
"    border: 1px solid #f75239;",
"}",
".notifications {",
"    background-color: #fff;",
"}",
".combo-gate a, .nsfw-gate a, .spoiler-gate a {",
"    padding: 0;",
"}",
".combo-gate a .gate--label, .nsfw-gate a .gate--label, .spoiler-gate a .gate--label {",
"    background: #f75239;",
"    color: #e5e5e5;",
"    padding: 20px;",
"}",
".combo-gate a::after, .nsfw-gate a::after, .spoiler-gate a::after, .dropdown.open .dropdown-menu a {",
"    color: #e5e5e5;",
"}",
".combo-gate a:hover::after, .nsfw-gate a:hover::after, .spoiler-gate a:hover::after {",
"    color: inherit;",
"}", 
".navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover, .dropdown button:hover, ",
".dropdown.open button, .dropdown.open .dropdown-menu a:hover {",
"    color:#f75239;",
"}"
	
	"",
	".stream-item.pinned-post {",
	"    border: 1px solid #f75239;",
	"}",
	"",
	".stream-item-comments {",
	"    background: #3d3d3d;",
	"    border-top: 1px solid #f75239;",
	"    border-radius: 0px 0px 7px 7px;",
	"}",
	"",
	".stream-item-comments li {",
	"    border-bottom: 1px solid #f75239;",
	"}",
	"",
	".media-body .comment-reply {",
	"    color: #e5e5e5;",
	"    font-size: 1.0em;",
	"    background: #f75239;",
	"    border-radius: 6px 6px 0px 0px;",
	"    margin-left: 6px;",
	"    position: relative;",
	"    padding: 3px 5px 3px 8px;",
	"    bottom: -10px;",
	"}",
	"",
	".media-body .comment-reply:hover {",
	"    text-decoration: underline;",
	"}",
	"",
	".media-body .comment-time {",
	"    color: #e5e5e5;",
	"}",
	"",
	".reply-list {",
	"    border-radius: 0px;",
	"    background: #2d2d2d;",
	"    margin-top: 31px;",
	"}",
	"",
	".reply-list li:last-child {",
	"    border-bottom: 1px solid #f75239;",
	"    border-radius: 0px 0px 6px 6px;",
	"}",
	"",
	".more-wrapper {",
	"    top: 6px;",
	"}",
	"",
	" .like-stream-item {",
	"    top: 7px;",
	"}",
	"",
	".media-body .sm-comment-count {",
	"    color: #f75239;",
	"    font-size: 14px;",
	"    top: 7px;",
	"}",
	"",
	".media-body .stream-item-activity .heart-wrapper {",
	"    height: 13px;",
	"    width: 13px;",
	"    margin-top: 10px;",
	"}",
	"",
	".media-body .comment-time {",
	"    position: relative;",
	"    top: 6px;",
	"    margin-left: 10px;",
	"}",
	".agg-avatar img {",
	"    background: transparent;",
	"}",
	"",
	".stream-item--media img {",
	"    background: transparent;",
	"    border-radius: 6px;",
	"}",
	"",
	".aggregate-date {",
	"    background: #f75239;",
	"    border-radius: 6px;",
	"    color: #e5e5e5;",
	"}",
	"",
	".aggregate-wrapper .hr {",
	"    background: #f75239;",
	"}",
	"",
	".aggregate-wrapper .button {",
	"    background: #3d3d3d;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".aggregate-wrapper .button:hover {",
	"    background: #f75239;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".stream-item--title-block .author-name {",
	"    color: #f75239;",
	"    border-radius: 6px;",
	"    display: inline-block;",
	"    font-size: 1.2em;",
	"}",
	"",
	".stream-item--media-timeline {",
	"    margin-top: 0px;",
	"    padding: 10px 15px 0px 10px;",
	"}",
	"",
	".stream-item--title-block .author-avatar img {",
	"    background: #2d2d2d;",
	"    border: 0px solid #f75239;",
	"    height: 60px;",
	"    width: 60px;",
	"}",
	"",
	".stream-item--title-block .author-info {",
	"    margin-bottom: 10px;",
	"    top: 10px;",
	"}",
	"",
	".stream-item--title-block .author-secondary {",
	"    color: #e5e5e5;",
	"    font-size: 12px;",
	"    margin-top: 0px;",
	"    opacity: 1.0;",
	"}",
	"",
	".stream-item-activity .stream-item-participants {",
	"    top: 6px;",
	"}",
	"",
	".stream-item-activity .stream-like img {",
	"    background: #2d2d2d;",
	"}",
	"",
	".stream-item-comments {",
	"    border-top: 0px solid #f75239;",
	"}",
	"",
	".agg-action a {",
	"    color: #f75239;",
	"}",
	"",
	".aggregate-date .date-heading {",
	"    border-bottom: 0px solid #e5e5e5;",
	"    width: 100%;",
	"}",
	"",
	".aggregate-date .date-heading:after {",
	"    border-bottom: 1px solid #ffffff;",
	"    content: \"\";",
	"    float: left;",
	"    margin-bottom: 1px;",
	"    margin-left: 10%;",
	"    margin-top: 2px;",
	"    width: 80%;",
	"}",
	"",
	".stream-item {",
	"    border-bottom: 1px solid #f75239;",
	"}",
	"",
	".media-body .comment-actions {",
	"    background: #2d2d2d;",
	"    border-radius: 6px 6px 0px 0px;",
	"    border-top: 1px solid #f75239;",
	"    border-bottom: 1px solid #f75239;",
	"}",
	"",
	".media-body textarea:before {",
	"    content: \"Reply Below:\";",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-body textarea[style] {",
	"    margin-top: 30px;",
	"}",
	"",
	".form-control {",
	"    border-top: 1px solid #f75239;",
	"    border-bottom: 1px solid #f75239;",
	"    border-left: transparent;",
	"    border-right: transparent;",
	"    background: #2d2d2d;",
	"    color: #e5e5e5;",
	"}",
	"",
	".form-control:focus {",
	"    background: #2d2d2d;",
	"    color: #e5e5e5;",
	"}",
	"",
	".stream-item-comments li {",
	"    padding-bottom: 10px;",
	"}",
	"",
	".stream-item-comments .stream-item-activity {",
	"    margin-bottom: -10px;",
	"}",
	"",
	".add-comment-wrapper:before {",
	"    content: \"Reply Below:\";",
	"    color: #e5e5e5;",
	"    margin-bottom: 10px;",
	"    margin-top: -10px;",
	"    float: left;",
	"}",
	"",
	".d-inline-block .more-wrapper {",
	"    top: 6px;",
	"} ",
	"",
	".sm-comment-count, .stream-item-activity .like-stream-item, .more-wrapper {",
	"    top: 0px;",
	"}",
	".user-cover .dark-cover-overlay {",
	"    position: absolute;",
	"    bottom: 0;",
	"    top: 0;",
	"    width: 100%;",
	"    background: rgba(0,0,0,0.0);",
	"}",
	"",
	".navbar.primary-nav {",
	"    z-index: 500;",
	"    background: #1d1d1d;",
	"    border-bottom: 2px solid #f75239;",
	"}",
	"",
	".cover-page .transparent {",
	"    background: 0 0;",
	"    box-shadow: none;",
	"    -webkit-transition: all .5s ease;",
	"    transition: all .5s ease;",
	"    border: none;",
	"}",
	"",
	".cover-page .transparent .logo g:nth-child(2) {",
	"    fill: #f75239;",
	"}",
	"",
	".navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {",
	"    background: #1d1d1d;",
	"    border-radius: 4px;",
	"    padding: 2% 8%;",
	"}",
	"",
	".favorite-series-panel .nav-tabs {",
	"    background-color: transparent;",
	"}",
	"",
	".sidebar-footer .footer-social {",
	"    display: inline-block;",
	"    border-top: 2px solid #f75239;",
	"    border-radius: 6px;",
	"    padding-top: 10px;",
	"    margin-top: 25px;",
	"    width: 100%;",
	"}",
	"",
	".media-body .comment-actions {",
	"    margin-bottom: -31px;",
	"}",
	"",
	".media-body textarea[style] {",
	"    border-radius: 6px;",
	"    border-top: 1px solid #f75239;",
	"    margin-top: 30px;",
	"}",
	"",
	".media-tooltip.tether-target-attached-left>div:after {",
	"    border-left: 10px solid #f75239;",
	"}",
	"",
	".media-tooltip.tether-target-attached-right>div:before {",
	"    border-right: 10px solid #f75239;",
	"}",
	"",
	".media-tooltip>div {",
	"    background: #2d2d2d;",
	"    border: 1px solid #f75239;",
	"    color: #e5e5e5;",
	"}",
	"",
	".media-tooltip>div .media-synopsis {",
	"    font-size: 12px;",
	"    height: 78px;",
	"    overflow: auto;",
	"}",
	""

].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
