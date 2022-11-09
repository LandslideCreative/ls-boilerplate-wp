<div class="navigation-container" id="main-navigation">
	<div class="grid-container">
		<div class="grid-x grid-padding-x vertical-center">
			<div class="cell auto">
				<div class="logo">
					<a href="<?php echo home_url(); ?>">
						<?php $site_logo = get_field( 'site_logo', 'options');
						if( $site_logo ) { ?>
							<img src="<?php echo acf_image_single( 'site_logo', 'small', FALSE, 'options' ); ?>" alt="" />
						<?php } else { ?>
							<img src="<?php echo get_image_directory(); ?>/logo.png" alt="" />
						<?php } ?>
					</a>
				</div>
			</div>
			<div class="cell shrink">
				<nav class="main-nav">
					<?php display_navigation('main-nav'); ?>
				</nav>
				<div class="mobile-nav-toggle">
					<a href="#" class="off-canvas-toggle" data-toggle="offCanvas" aria-label="Mobile Navigation">
						<div></div>
						<div></div>
						<div></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>