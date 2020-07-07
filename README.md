# Open-access Drone Mapping Course

**[Citizen Science GIS](http://www.citizensciencegis.org), University of Central Florida**

**Course description**

This open-access drone mapping training course is designed to be use in the NSF eelgrass drone mapping project. How to use Unmanned Aerial Systems (UAS), i.e. drones, to collect remote sensing data. We create this training course for research partners and communities to learn how to fly drone , and perform the data processing in Geographical Information Science (GIS) method. This training course contains topics of flying DJI drones, Preflight & Planning, FAA part 107 examination, Drone2map user guide, and ArcGIS based drone image analyses.


 **Course Objectives**
 
1.	Basic knowledge of Drone, setup and maintenance. 
2.	Learn how to fly drone, manual manipulation and auto-pilot.
3.	Learn FAA regulation, sectional chart, and how to take the part 107 exam.
4.	Safety guidlines when flying drone. 
5.	Learn to use DJI GS Pro for auto-pilot flying and collecting field data. 
6.	In situ measurements guide, collecting field data and Ground Control Points (GCPs).
7.	Use Esri Drone2Map to stitching and geo-referencing the drone imagery. 
8.	Data management and cloud storage of drone imagery
9.	Basic GIS analysis on drone imagery, digitizing, multi-spectral band math, vegetation index and image classification. 

# 1. Drone Basics

[Introduction to flying drone](/Documents/CSGIS_Preflight_Planning_and_Safety.pdf)
*	20 minutes lecture to drone and basic manipulation.
*	Read the “Phantom 4 user manual” in the course material and setup the drone.
*	1.5-hour practice fly with the help of TA, get familiar with drone manipulating, fly around and taking picture/video using the drone.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4PYAk11Jio8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (1/5) Drone unboxing and assemble

<iframe width="560" height="315" src="https://www.youtube.com/embed/EFAxI218N7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (2/5) How to setup the software for DJI Phantom 4

# 2. In-Flight Operation
* Before flights, the remote pilot needs to check gloves, eye protection, safety vests, radio, and life jacket if taking off from a boat. 
* During the flights, wthe UAV needs to remain within visual line of sight of the remote pilot.
* The flight is not permitted directly over non-participating people.   
* Because coastal mapping with drones often includes taking off and landing on a boat, additional procedures and safety concerns were discussed. 

### Drone Manipulation

<iframe width="560" height="315" src="https://www.youtube.com/embed/jpWw9_WZGHU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (3/5) Calibrate the drone and setup the software

### Air Space Regulation
* all drones are required to be registered with the FAA if they weigh more than 0.55 lbs (250 grams) and less than 55 lbs (25 kg). 
* When operating a drone, a Remote Pilot-in-Command cannot fly an UAV higher than 400 feet above ground level (AGL), unless it’s flown within a 400-foot radius of a structure and does not fly higher than 400 feet above the structure’s immediate uppermost limit. 
* The minimum distance of the UAS from clouds must be no less than 500 feet below the cloud and 2,000 feet horizontally from the cloud. 

For more FAA regulation, please read [FAA remote pilot study guide](/Documents/remote_pilot_study_guide.pdf)

# 3. Autonomous Mapping

 [Advance drone flying](/Documents/CSGIS_Preflight_Planning_Document.pdf)
*	Read the “CSGIS_Preflight_Planning_Document” in the course material, learn to use DJI GS Pro app for auto-pilot and safety guidelines. 
*	2-hour practice flying via auto-pilot with the help of TA, collecting images for mapping, and transfer all images from drone to computer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n2iIS3-4z-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Open training course for drone mapping: (4/5) Create drone mapping task using DJI GS Pro

### Mapping planning & settings

Participants learned how to plan and create a new flight area using autonomous flights with different mapping parameters. Training covered: 
* tradeoffs between spatial coverage and spatial resolution (e.g. if drones fly at a higher elevation, the image coverage is larger, but the spatial resolution is coarser and vice versa); 
* appropriate settings of the camera model for a proper shooting angle to minimize sun glint; 
* how flight direction and capture mode varies depending on the shape of the site and the wind directions; 
* how front/side overlap ratio is highly correlated with flying time and the number of batteries needed. The values to be used for addressing those factors are included in Table 1.  
![image](/Files/Table1.png) 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Op4rjLfgmpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (5/5) Unlock fly zone and Using DJI GS Pro for autonomous mapping

# 4. Image Processing

### Drone Image stitching

 [Processing the drone imagery to mapping products](/Documents/CSGIS_Drone2map_User_Guide.pdf)

*	Learn the “CSGIS_Drone2map User Guide”.
*	1-hour lab session for drone2Map data processing.
Note: Drone2Map software package could be downloaded from course material resources folder. Sample data are provided in course folder.

### Geo-referencing

For points on land, we used obvious objects, such as red buckets that could be easily identified in the drone image. For image referencing over the water, we used light-colored buoys with anchors fixed on the water surface to serve as the Ground Control Point (GCP). Using a Garmin R1 GNSS high-performance handheld GPS, we collected about 10 points for each of the sites. The coordinates of the GCPs are included in the mapping software to geo-register the images. By associating features on the scanned image with real-world x and y coordinates, the software can progressively warp the image so it fits other spatial datasets. 


### Orthomosaic & Elevation Data

 [Data analysis in Geographical Information Science (GIS)](/Documents/CSGIS_ArcGIS_based_Image_Analyses_Manual.pdf)
*	Learn the “CSGIS_ ArcGIS based Image Analyses Manual”
*	1-hour lab session for GIS analysis on drone imagery, digitizing, multi-spectral band math, vegetation index and image classification.
Note: ArcMap software package could be downloaded from course material resources folder. Sample data are provided in course folder.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yaX336s4DjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</cite>UAV/dronehigh-resolution 3D fly-through video for Bodega Marine Laboratory (BML)</cite>

# 5. Post-training Self-study

### Self-study for FAA UAS Exam

[Self-study for FAA part 107 exam](/Documents/CSGIS_Instruction_for_FAA_Part_107_Examination.pdf)
*	10-hours study for “CSGIS_Instruction for FAA Part 107 Examination” as well as “remote_pilot_study_guide” for taking the exam. There are also lots of resources online.


### Data Processing Protocol 

 [Drone imagery and eelgrass mapping principles](/Slides/UAV_Traning_Slides_Yang.pptx)
*	40 minutes lecture for drone eelgrass mapping principles. 
*	30 minutes discussion followed by the lecture to discuss eelgrass drone mapping. 




 














