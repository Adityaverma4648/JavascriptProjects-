# from asyncore import write
import os
import json

path = r"C:\Users\adity\OneDrive\Documents\GitHub\javascriptProjects\js_project\src\Project"
dir_list = os.listdir(path)
 
print("Files and directories in '", path, "' :")
 
# prints all files
print(dir_list)

with open(r'C:\Users\adity\OneDrive\Documents\GitHub\javascriptProjects\js_project\src\Files.json', 'w') as json_file:
    json.dump(dir_list, json_file)

