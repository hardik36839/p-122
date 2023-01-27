function preload()
{
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png")
}
function setup()
{
    canvas = createCanvas( 400 ,400);
    canvas.position(110 , 250);
    vidio = createCapture(VIDEO);
vidio.hide();

}
function draw()
{
    image(img , 100 , 100 ,200 , 200)
    fill(255 , 0 , 0 )
    stroke(128 , 0 , 0 )
    circle(30 , 20 , 30 )
    circle(370 , 20 , 30 )
    circle(30 , 370 , 30)
    circle( 370 , 370 , 30)

    fill(0 , 128 , 0 )
    stroke(0 , 128 , 0 )
    rect(20 , 30 , 20 , 325)
    rect(360 , 30 , 20 , 325)
    rect(40 , 358 , 320 , 20)
    rect(40 , 15 , 315 , 20)
}
function take_snapshot()
{
    save("project_picture.png")
}