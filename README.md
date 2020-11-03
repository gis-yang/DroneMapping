# Open-access Drone Mapping Course

**[Citizen Science GIS](http://www.citizensciencegis.org)**

**Citation:**

Yang, B., Hawthorne, T., Hessing-Lewis, M., Duffy, E., Reshitnyk, L., Feinman, M., Searson, H., Developing an Introductory UAV/Drone Mapping Training Program for Seagrass Monitoring and Research, Drones, 4(4), 70. (IF: 3.176) DOI:[10.3390/drones4040070](https://www.mdpi.com/878464)

**Course description**

Unoccupied Aerial Vehicles (UAV), also known as small Unmanned Aerial Systems (sUASs), Unmanned Aerial Systems (UAS) or drones, with their high spatial resolution, temporal flexibility, and ability to repeat photogrammetry, afford advancements in other remote sensing approaches for coastal mapping, habitat monitoring, and environmental management. This open-access drone mapping training course is designed to use drones to collect remote sensing data for coastal mapping and seagrass conservation. We create this training course for research partners and broader communities to learn how to fly drones, and perform data processing in Geographical Information Science (GIS) method. This training course contains topics of flying drones, Preflight & Planning, FAA part 107 examination, Drone2map user guide, and GIS based drone image analyses.


 **Course Objectives**
 
1.	Basic knowledge of Drone, setup and maintenance. 
2.	Learn how to fly drones, manual manipulation and auto-pilot.
3.	Operate the UAV efficiently, safely, ethically and consistent with FAA regulations.
3.	Learn FAA part 107 exam, e.g., airspace regulations, sectional charts, and etc.
4.	Safety guidelines when flying drones. 
5.	Learn to use DJI GS Pro for auto-pilot flying and collecting field data. 
6.	In situ measurements guide, collecting field data and Ground Control Points (GCPs).
7.	Use Esri Drone2Map to stitch and geo-referencing the drone images. 
8.	Data management and cloud storage of drone imagery
9.	Basic GIS analysis on drone imagery, digitizing, multi-spectral band math, vegetation index and image classification. 


![image](/Files/TrainingModules.png)

The training program is divided into 5 training sections and one post-training self-study guide to prepare participants for the FAA Part 107 examination. This examination is necessary for commercial-based drone operators to conduct flights in the United States. 

# 1. Drone Basics

The first training module includes a tutorial to introduce basic manipulation, assembly, setup software, and calibration of the quadcopter drone. The DJI Phantom 4 Pro were used as an example. The training contents includes a lecture-based review of the drone, its basic flight manipulation, rules and regulations for drone flights. Through the lecture and tutorial, safe drone assembly techniques were reviewed as well as safety requirements. We covered pre-flight planning and in-flight precautions, including maintaining UAV within visual line of sight of the remote pilot.

*	Read the [Phantom 4 manual] (/Documents/Phantom_4_User_Manual_v1.6.pdf) to learn basic manipulation, assembly, setup software, and calibration of the quadcopter drone.
*	Review the drone, its basic flight manipulation, rules and regulations for drone flights.
*	Read through the [operations manual and safety guidelines](Documents/CSGIS_Preflight_Planning_and_Safety.pdf)l and participated in a hands-on tutorial setting up the drone and software environment for a flight. 	
*	One-hour practice fly, get familiar with manual drone operations, including takeoff and landing, changing flight altitude, and adjusting drone camera/video settings


<iframe width="560" height="315" src="https://www.youtube.com/embed/4PYAk11Jio8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (1/5) Drone unboxing and assemble

<iframe width="560" height="315" src="https://www.youtube.com/embed/EFAxI218N7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (2/5) How to setup the software for DJI Phantom 4


### Register your drone

Register your drone to FAA is very important in the United States since FAA needs to identify a drone and use FAA registration number to seek information. 
 
“Failure to register with the FAA could result in one or a combination of the following: a civil penalty of up to $27,500; a criminal fine of up to $250,000; imprisonment for up to three years.” - FAA

![image](/Files/FAARegistration.png)

Directions for Registering Drone with FAA:
1.	Go to https://faadronezone.faa.gov/#/
2.	Click “Register” in the same row as “I fly under Part 107 or as a Public Aircraft.”
3.	Enter information and click “Create Account.”
4.	Verify your email address and log in
5.	Make sure that you are in the “Part 107 Dashboard.”
6.	Click “Manage sUAS Inventory.”
7.	Click “Add UAS.”
8.	Fill out the information
9.	Enter your drone’s unique serial number, as found in the battery cavity of the drone: 
10.	Go to “Shopping Cart” and click “Checkout.”
11.	Follow prompts for payment
12.	Navigate back to your “FAA Part 107 Dashboard” and click “Manage sUAS Inventory”
13.	Find the drone that you registered and find the “Registration” column. 
14.	Mark your drone with the registration number according to the following FAA 




# 2. In-Flight Operation

Following the overview of drone basics, there is a 1.5-hour manual flying session. Through this interactive exercise, participants gained experience in basic drone operations. 

* 	Remote pilot checks for safety equipment including gloves, eye protection, safety vests, radio, and life jackets if taking off from a boat
* 	The flight is not permitted directly over non-participating people.   
*	Because coastal mapping with drones often includes taking off and landing on a boat,  hand catching of the drone on a boat needs to be practiced for both takeoff and landing.
*	Focus on maintaining visibility and line of sight with the drone and avoiding hazards.

### Drone Manipulation

<iframe width="560" height="315" src="https://www.youtube.com/embed/jpWw9_WZGHU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (3/5) Calibrate the drone and setup the software

### Air Space Regulation
* 	All drones are required to be registered with the FAA if they weigh more than 0.55 lbs (250 grams) and less than 55 lbs (25 kg). 
* 	Maintain UAV within visual line of sight of the remote pilot. a) standard flight altitude (< 400 feet above ground level (AGL); b) minimum distance from clouds (> 500 feet below the cloud and 2,000 feet horizontally from the cloud); and c) maintaining a safe distance from bystanders.
* 	The minimum distance of the UAS from clouds must be no less than 500 feet below the cloud and 2,000 feet horizontally from the cloud. 

Note: There are similar regulations in Canada. All drones that weigh between 250 g and 25 kg must be registered with Transport Canada. FAA certification (U.S.) is not applicable in Canada, and drone pilots must follow the rules in the Canadian Aviation Regulations (CARs) Part IX—Remotely Piloted Aircraft Systems.

For more FAA regulation, please read [FAA remote pilot study guide](/Documents/remote_pilot_study_guide.pdf)

# 3. Autonomous Mapping

Autonomous mapping provides an advantage over manual flight operations by ensuring that data collection is efficient and replicable at each site. In this module we learn how to use autonomous functions to capture hundreds of images that were pre-programmed to be evenly distributed with nadir view over the mapping area.

*	Read the [CSGIS_Preflight_Planning_Document] (/Documents/CSGIS_Preflight_Planning_Document.pdf) in the course material, learn to use DJI GS Pro app for auto-pilot and safety guidelines. 
*	Learn how to plan and create autonomous flights with different mapping parameters
*	2-hour practice flying via auto-pilot, collecting images for mapping, and transfer all images from drone to computer.


<iframe width="560" height="315" src="https://www.youtube.com/embed/n2iIS3-4z-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Open training course for drone mapping: (4/5) Create drone mapping task using DJI GS Pro

### Mapping planning & settings

Participants learned how to plan and create a new flight area using autonomous flights with different mapping parameters. Considerations for autonomous parameters included: 
*	Tradeoffs between spatial coverage and spatial resolution (e.g., if drones fly at a higher elevation, the image coverage is larger, but the spatial resolution is coarser and vice versa); 
*	Appropriate settings of the camera model for a proper shooting angle to minimize sun glint; 
*	How flight direction and capture mode vary depending on the shape of the site and the wind directions; 
*	How front/side overlap ratio is related to flying time and the number of batteries needed.

![image](/Files/Table1.png) 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Op4rjLfgmpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open training course for drone mapping: (5/5) Unlock fly zone and Using DJI GS Pro for autonomous mapping

# 4. Image Processing

### Drone Image stitching

 [Processing the drone imagery to mapping products](/Documents/CSGIS_Drone2map_User_Guide.pdf)

*	Learn the “CSGIS_Drone2map User Guide”.
*	1-hour lab session for drone2Map data processing.
Note: Drone2Map software package could be downloaded from course material resources folder. Sample data are provided in course folder.

**Geo-referencing**

For points on land, we used obvious objects, such as red buckets that could be easily identified in the drone image. For image referencing over the water, we used light-colored buoys with anchors fixed on the water surface to serve as the Ground Control Point (GCP). Using a Garmin R1 GNSS high-performance handheld GPS, we collected about 10 points for each of the sites. The coordinates of the GCPs are included in the mapping software to geo-register the images. By associating features on the scanned image with real-world x and y coordinates, the software can progressively warp the image so it fits other spatial datasets. 


### Orthomosaic & Elevation Data

 [Data analysis in Geographical Information Science (GIS)](/Documents/CSGIS_ArcGIS_based_Image_Analyses_Manual.pdf)
*	Learn the “CSGIS_ ArcGIS based Image Analyses Manual”
*	1-hour lab session for GIS analysis on drone imagery, digitizing, multi-spectral band math, vegetation index and image classification.
Note: ArcMap software package could be downloaded from course material resources folder. Sample data are provided in course folder.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yaX336s4DjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

UAV/dronehigh-resolution 3D fly-through video for Bodega Marine Laboratory (BML)

# 5. Post-training Self-study

### Self-study for FAA UAS Exam

In order to fly drones under the FAA’s Small UAS Rule (Part 107) in the U.S.A., one must obtain a Remote Pilot Certificate from the FAA (FAA.gov). This certificate demonstrates that the remote pilot understands the regulations, operating requirements, and procedures for safely flying drones. 

[Self-study for FAA part 107 exam](/Documents/CSGIS_Instruction_for_FAA_Part_107_Examination.pdf)

Above training document reviewed content from the course modules as well as additional material necessary to prepare for the drone examination, including airspace concepts, weather sources, radio communications, sectional charts, and drone physics. It also includes additional online resources and sample questions for the examination.


### Data Processing Protocol 

 [Drone imagery and eelgrass mapping principles](/Slides/UAV_Traning_Slides_Yang.pptx)
*	40 minutes lecture for drone eelgrass mapping principles. 
*	30 minutes discussion followed by the lecture to discuss eelgrass drone mapping. 




 


