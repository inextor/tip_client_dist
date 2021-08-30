<?php
	namespace TIPS;
	include_once(__DIR__.'/api/app.php');
	if( empty($_GET['id'] ) )
	{
		header("HTTP/1.0 404 Not Found");
		die();
	}

	app::connect();

	$tip = new tip();
	$tip->id = $_GET['id'];

	if( !$tip->load(true) )
	{
		header("HTTP/1.0 404 Not Found");
		die();
	}

	$left_team = null;

	if(!empty( $tip->left_team_id ) )
	{
		$left_team = new team();
		$left_team->id = $tip->left_team_id;
		$left_team->load(true);
	}

	if(!empty( $tip->right_team_id ) )
	{
		$right_team = new team();
		$right_team->id = $tip->right_team_id;
		$right_team->load(true);
	}

	$left_team_name = $left_team ? $left_team->name : $tip->custom_left_team;
	$right_team_name = $right_team ? $right_team->name : $tip->custom_right_team;

	//if( empty( $tip->media1_image_id ) )
	//{
		$left_image_id	= $left_team ? $left_team->image_id : 1;
		$right_image_id	= $right_team ? $right_team->image_id : 1;

		$tip->media1_image_id = create_image($left_team_name,$right_team_name, $left_image_id,$right_image_id);
		$tip->updateDb('media1_image_id');

		$image = new image();
		$image->id = $tip->media1_image_id;
		$image->load(true);

		//echo file_get_contents(app::$image_directory.'/'.$image->filename, true);
	//}

	function create_image($left_name,$right_name,$left_image_id, $right_image_id)
	{
		$image_width = 758;
		$image_height = 359;

		$image_left	= new image();
		$image_right = new image();

		$image_left->id = $left_image_id;
		$image_left->load(true);

		$image_right->id = $right_image_id;
		$image_right->load(true);

		$image_bin = imagecreatetruecolor(758,359);
		$white_color = imagecolorallocate($image_bin,255,255,255);

		imagefilledrectangle($image_bin,0,0,$image_width,$image_height,$white_color);
		$left_image_gd = create_gdimage_from_db_image( $image_left );
		$right_image_gd = create_gdimage_from_db_image( $image_right );

		drawToImage(
			$image_bin,
			$left_image_gd,
			50, //dst x
			30, //dest y
			200,//dest_width
			200,//dest_height
		);

		$font_number = 1;
		$text_color = imagecolorallocate($image_bin,0,0,0);
		imagestring( $image_bin, $font_number, 300, 30, 'VS',$text_color);
		drawToImage
		(
			$image_bin,
			$right_image_gd,
			500, //dst x
			30, //dest y
			200,//dest_width
			200,//dest_height
		);

		$image = new image();
		$image->content_type = 'image/png';
		$image->filename=uniqid('tip').'.png';
		$image->original_filename = 'tip.png';

		$size = writeImageToFile($image_bin,app::$image_directory.'/'.$image->filename);
		//imagetruecolortopalette($image_bin);
		$image->width = $image_width;
		$image->height = $image_height;
		$image->size = $size;
		$image->insertDb();

		return $image->id;
	}

	function writeImageToFile($image_bin,$path)
	{
		ob_start();
		imagepng($image_bin,null,-1,-1);

		$image_content = ob_get_clean();
		$size = strlen( $image_content );
		$fp			= fopen( $path, 'w' );
		fwrite( $fp, $image_content);
		fclose( $fp );
		return $size;
	}


	function create_gdimage_from_db_image($image)
	{
		error_log('Image to load '.$image->filename);

		$path = app::$image_directory.'/'.$image->filename;

		ob_start();

		if( $image->content_type == 'image/gif' )
		{
			return imagecreatefromgif( $path );
		}
		if( $image->content_type == 'image/jpeg' )
		{
			return imagecreatefromjpeg( $path );
		}
		if( $image->content_type == 'image/png')
		{
			return imagecreatefrompng( $path );
		}

	}

	function drawToImage($dest,$src, $positionx, $positiony,$dest_width,$dest_height)
	{
		$width = imagesx( $src);
		$height = imagesx( $src);

		error_log
		(
			'dest,'.PHP_EOL.
			'src,'.PHP_EOL.
			'dest_x'.$positionx.PHP_EOL. //dst x
			'dest_y'.$positiony.PHP_EOL.//dest y
			'src_x 0'.PHP_EOL. //src_x
			'src_y 0'.PHP_EOL. //src_y
			'dest_w'.$dest_width.PHP_EOL.//dest_width
			'dest_h'.$dest_height.PHP_EOL.//dest_height
			'src_w'.$width.PHP_EOL.
			'src_h'.$height.PHP_EOL
		);

		imagecopyresampled
		(
			$dest,
			$src,
			$positionx, //dst x
			$positiony, //dest y
			0, //src_x
			0, //src_y
			$dest_width,//dest_width
			$dest_height,//dest_height
			$width,
			$height,
		);
	}

?><!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <h1>Href Attribute Example</h1>
    <p></p>
  </body>
</html>
