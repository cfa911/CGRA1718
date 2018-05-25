/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject{
	
	constructor(scene)
	{
		super(scene);
		this.plano = new Plane(scene,1, 0, 50, 0, 50);
		
		this.chao = new CGFappearance(this);
        this.chao.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.chao.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.chao.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.chao.setShininess(10);
		this.chao.loadTexture("resources/images/terrain.png");
	};
	
	display()
	{
		
		
    // this.pushMatrix();
    // this.rotate(-90 * degToRad, 1, 0, 0);
    // this.scale(32, 32, 0.2);
    // this.chao.apply();
    // this.plano.display();
    // this.popMatrix();

	};
}