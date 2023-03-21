import pyvista as pv
from pyvista import examples
import time

tex = examples.download_masonry_texture()
while True:
    for height in range(0, 50, 1):
        height /= 10
        pl = pv.Plotter()
        _ = pl.add_mesh(pv.Cylinder(height=height,direction=[0, 1, 0]), texture = tex)
        pl.export_gltf('scene.gltf') 
        # pl.export_obj('../holo-app/public/scene.obj') 
        time.sleep(0.05)
