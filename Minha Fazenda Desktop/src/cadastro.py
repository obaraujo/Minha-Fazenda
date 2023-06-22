import imageio
from tkinter import Tk, Label, PhotoImage
from PIL import Image
from pathlib import Path

video_name = "/src/Intro2019.mp4"
video = imageio.get_reader(video_name)
delay = int(1000 / video.get_meta_data()['fps'])
     
def stream(label):
 
  try:
    image = video.get_next_data()
  except:
    video.close()
    return
  label.after(delay, lambda: stream(label))
  frame_image = PhotoImage(Image.fromarray(image))
  label.config(image=frame_image)
  label.image = frame_image

if __name__ == '__main__':
 
  root = Tk()
  my_label = Label(root)
  my_label.pack()
  my_label.after(delay, lambda: stream(my_label))
  root.mainloop()