import pyvista as pv
pl = pv.Plotter()
_ = pl.add_mesh(pv.Sphere())
pl.export_obj('scene.obj')  