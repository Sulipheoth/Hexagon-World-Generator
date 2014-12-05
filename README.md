Hexagon-World-Generator
=======================

This is a theoretically infinite hexagon-based world generator. It has been created in Unity 4.5 and I am happy with the simple coding of Unity JavaScript.  It could eventually be an Age of Empires type of game.  Right now however I am experiencing a rather odd memory leak that seems to only occur when the game is compiled and running standalone.  When played in the Unity editor, the memory leak does not happen.  Also the leak will continue even if new chunks are not being spawned.  I haven't narrowed down the problem yet but I have a few ideas:  the actual PerlinNoise function provided by Unity; the disconnection between spawning and deleting (spawner objects do the spawning and the spawned chunks delete themselves when too far from the camera); or something else?  The most important detail I think is that the problem does NOT occur when you're playing the game in the editor.  

Input will be appreciated.  
