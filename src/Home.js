import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home_section">
				<Card
					src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
					title="Cabins and cottages"
					description=""
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
					title="Unique stays"
					description=""
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
					title="Entire homes"
					description=""
				/>
			</div>
			<hr />
			<div className="home_section">
				<Card
					src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
					title="3 Bedroom Flat in Bournemouth"
					description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
					price="$169/night"
				/>
				<Card
					src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
					title="Penthouse in London"
					description="Enjoy the amazing sights of London with this stunning penthouse"
					price="$455/night"
				/>
				<Card
					src="https://media.nomadicmatt.com/2018/apartment.jpg"
					title="1 Bedroom apartment"
					description="Superhost with great amenities and a fabolous shopping complex nearby"
					price="$91/night"
				/>
			</div>
			<div className="home_section">
				<Card
					src="https://i.pinimg.com/474x/c2/18/9e/c2189ef8f2932b7f0d1b056bdd0b7d6c.jpg"
					title="Boston apartment"
					description="Modern looking apartment in Boston that has incredible view of the city"
					price="$87/night"
				/>
				<Card
					src="https://i.pinimg.com/474x/68/29/84/6829840e45e526ab315ef853ab402c26.jpg"
					title="Downtown LA Apartment"
					description="An incredible apartment with decorum full of modern arts for those afficionados"
					price="$90/night"
				/>
				<Card
					src="https://i.pinimg.com/474x/28/da/fd/28dafd3a9bb8342cfdedf1081c4bdb8a.jpg"
					title="Manhattan warehouse loft apartment"
					description="A Manhattan aparment made for the ones who prefer a minimalistic design"
					price="$120/night"
				/>
			</div>
			<div className="home_section">
				<Card
				src="https://a0.muscache.com/im/pictures/5c39fd93-095d-43db-8c9f-02a901c1126c.jpg?im_w=480"
				title="Epic Condo near Canyon Lodge"
				description="Come stay awhile in our updated cozy condo! You'll be close to all the aweso..."
				price="$164 / night"
				/>
				<Card
				src="https://odis.homeaway.com/odis/listing/38ef56cf-8455-4e2b-a67e-fda2457b0b8e.f6.jpg"
				title="Mammoth Cozy Retreat - Sleeps 4!"
				description="Cozy 1 bedroom for a family getaway to Mammoth Lakes! Walking distance to..."
				price="$317 / night"
				 />
				<Card
				src="https://odis.homeaway.com/odis/listing/539f1bf3-e782-48ff-89b7-bd4f4d838cd5.f6.jpg"
				title="A Cozy & Quiet Mammoth Retreat For Family & Friends"
				description="A newly remodeled, very clean, totally private and charming Mammoth Moun..."
				price="$260 / night"
				 />
			</div>
			<div className="home_section">
				<Card 
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxv06OECnsflzuXu6Pd8P9NYDhU7vZQi6TfA&usqp=CAU"
				title="Steps to Heavenly and Stateline - Unit B"
				description="Part of a 2 house property, this newly renovated space features a modern king s..."
				price="$85 / night"
				/>
				<Card
				src="https://i.pinimg.com/originals/51/77/ce/5177cea3a8e53647d5d1e19a6224c45d.jpg"
				title="Billionaire Glass House - House Of Bruce Wayne"
				description="A gorgeous glasshouse overlooking the lake that was recently put for rent. It featu..."
				price="$190 / night"
				/>
				<Card
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/FarnsworthHouse-Mies-5.jpg/339px-FarnsworthHouse-Mies-5.jpg"
				title="Farnsworth House Duplicate near Mammoth Mountain"
				description="A literal architecture magnum opus developed by a well-renowned architect, the str..."
				price="$265 / night"
				/>
			</div>
			<div className="home_section">
					<Card 
					src="https://a0.muscache.com/im/pictures/miso/Hosting-21801661/original/15753db9-1576-4f30-a47e-03b7ceeda93b.jpeg?im_w=1200"
					title="!!Best Location!! Walks to Lifts at Canyon Lodge"
					description="This newly renovated 2-level luxury mountain condo is located at Mammoth West...."
					price="$240 / night"
					/>
					<Card 
					src="https://a0.muscache.com/im/pictures/miso/Hosting-11327718/original/1cf1bda1-948d-41de-98a5-422106a3b790.jpeg?im_w=1200"
					title="Canyon Lodge Condo, Chamonix #47. Walk to Lifts"
					description="Beautifully appointed one bedroom condo located in one of the most desirabl..."
					price="$121/ night"
					/>
					<Card 
					src="https://a0.muscache.com/im/pictures/e16031ba-bb3b-489a-aca5-c68d91d234c4.jpg?im_w=960"
					title="Stylish Condo with Beautiful Decor on Sierra Star Golf Course"
					description="Stylish Condo with Beautiful Décor on Sierra Star Golf Course"
					price="$220 / night"
					/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/c8e4eae3-3897-407d-b5f6-41919d464f09.jpg?im_w=1200"
				title="Super Luxury 2 bedroom unit in West Hills"
				description="A luxury big unit with a Private kitchen, Private entrance, Very clean, Queen Bed..."
				price="$99 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/73198cba-b765-4719-9492-85995c4ba7b3.jpg?im_w=1200"
				title="Treehouse, San Jose"
				description="250 sq ft treehouse with stairs leading to 2 lofts with beds overlooking the most go..."
				price="$350 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/468c7dc8-8d46-459f-942a-7b7f96573225.jpg?im_w=1200"
				title="Luxury Home for Silicon Valley travellers"
				description="New remodeled house located in heart of Silicon Valley. The house features 2be..."
				price="$158 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/1fa66eb6-c761-4d87-944a-892e972a5efe.jpg?im_w=1200"
				title="Urban Flat | Open Floor Plan 2BR | Eco Cleaned"
				description="This 2BR Urban Flat is located in the heart of San Carlos in a safe & walkab..."
				price="$164 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/707bd0c8-9c65-4bc7-86f0-b73c5bbc5375.jpg?im_w=1200"
				title="Two Master Suites on the Cross-road of Silicon Va."
				description="Welcome to the South Bay's, most elegantly planned community across the stre..."
				price="$169 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/miso/Hosting-44616004/original/0875a84f-df48-4b40-b75c-ce5a240b0777.jpeg?im_w=1200"
				title="A place of your own | 2BR in Sunnyvale"
				description="Stay for 30+ nights (minimum nights and rates are FIRM) where you’ll have th..."
				price="$182 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/8cc37145-0021-47f6-a675-e7fc432eea15.jpg?im_w=1200"
				title="Mammoth Creek Unit 28"
				description="Enjoy exceptional views of the Sherwin mountains, the meadow and Mammoth Creek..."
				price="$205 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/67e44a80-4d62-40e2-89d2-4ff5bf0f895d.jpg?im_w=1200"
				title="SPACIOUS *2bd/2bth+loft condo in the HEART of town"
				description="Dog-friendly (two dogs permitted, no size restriction,) MOUNTAIN VIEW, 2 bedroom..."
				price="$179 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/f278c96c-17a3-4a97-acd2-d5879d4c7a70.jpg?im_w=1200"
				title="Modern 1BR+Loft, Mtn Views, Pet Friendly, Sleeps 8"
				description="Bright 1BR+loft, pet-friendly, Meadow condo sleeps 8. Modern, fully-equipped kitchen..."
				price="$180 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/fbcef2b0-51d3-40d9-9e71-ea19d48e60bc.jpg?im_w=1200"
				title="Fantastic Townhome with shared Hot Tub and stunning views..."
				description="Retreat from the hustle and bustle of everyday life at Snowcreek 820—a..."
				price="$610 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/a8c6b3fb-20b1-499f-8cd0-72f143ec7550.jpg?im_w=1200"
				title="3400 Sq Ft Homes, Sleeps 16+ And Close to Mountain!"
				description="njoy your mountain vacation in our beautiful home with a layout design..."
				price="$482 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/19dadf8d-4c01-4053-9b49-186dfb2f7f9b.jpg?im_w=1200"
				title="Elegant Ski Townhome with Mountain Views and Hot Tub Ac..."
				description="Nestled on the 16th fairway of the Sierra Star golf course, this invi..."
				price="$337 / night"
				/>
			</div>
			<div className="home_section">
				<Card
				src="https://a0.muscache.com/im/pictures/2afee6aa-5806-4cae-b5a2-5177695b202a.jpg?im_w=1200"
				title="Cozy studio apt. near to San Jose airport/downtown"
				description="Cozy guest house at great location! Tuck away in the beautiful Rose Gard..."
				price="$59/ night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/efc60581-26c3-4216-b6e4-951ae8f5df8e.jpg?im_w=1200"
				title="Remodeled Entire 3b2b House  at Walkable Location"
				description="This is a one-story house at a walkable location. Featured spots nearby:..."
				price="$41 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/4387ab40-1303-4bb0-b0a3-066345c6314c.jpg?im_w=1200"
				title="Contemporary house, prime location"
				description="Prime location close to Stanford University and downtown"
				price="$604 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/4c690d8a-c099-4af0-9ca8-da3e1993cbdf.jpg?im_w=720"
				title="Rustic home with four bedrooms"
				description="The setting is unrivaled for privacy and tranquility on appro..."
				price="$514 /night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/78ac1289-0608-48b8-9456-b126e285633a.jpg?im_w=720"
				title="Santana Row Loft Style Condo with Private Patio #4"
				description="Newly remodeled, immaculate, modern home in the heart of Si..."
				price="$450 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/2d9973d5-7714-435d-b3c8-f4e050c57a7a.jpg?aki_policy=xx_large"
				title="Hilltop Retreat with Panoramic Cityscape Vistas"
				description="Indulge in comfort and style at this tranquil suburban home. The r..."
				price="$386 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/806138cb-052b-4db0-b03a-756cde30faf6.jpg?im_w=1200"
				title="Santa Clara 2BR, w/ Gym, Cinema, W/D, wa...."
				description="Show up and start living from day one in Santa Clara with this ro..."
				price="$197 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/81263022-8f13-4203-9817-7d8d1c9fd626.jpg?im_w=1200"
				title="Nice 2BR Apartment with Gym at West San Jose"
				description="Upgraded furnished 2 bedroom 1 bath one story condo locat..."
				price="$120 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/a8ee99f1-1b5e-4574-b31b-69d35d11731c.jpg?im_w=1200"
				title="Cozy apartment for you | 2BR in San Mateo"
				description="Stay for 31+ nights (minimum nights and rates are FIRM) where you..."
				price="$180 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/4559b485-99e7-46d5-a279-c37c45dc7dd9.jpg?im_w=720"
				title="Sunnyvale Condo with Pool Access"
				description="Sunnyvale is located in the heart of Silicon Valley, with Google..."
				price="$173 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/82386579/38aae099_original.jpg?im_w=720"
				title="Immaculate Executive Cottage"
				description="Private Cottage in the heart of Silicon Valley. Walk to downtown..."
				price="$215 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/9268c62f-c178-4d3e-b411-4e5ef6833735.jpg?im_w=720"
				title="Beauty Home 3Br/2Bath Nearby DownTown San Jose"
				description="Beautiful home! Up to 10 guests Entire Single home: 1,171..."
				price=""
				/>
			</div>
			<div className="home_section">
				<Card 
				src="https://a0.muscache.com/im/pictures/3956daf5-52be-42cc-9832-cb18cf0d02bb.jpg?im_w=720"
				title="Urban Flat | Open Floor Plan 2BR | Eco Cleaned"
				description="This 2BR Urban Flat is located in the heart of San Carlos in a s..."
				price="$165 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/275eeb5c-1cf1-4d23-b00d-60e843b32eda.jpg?im_w=720"
				title="TRIBE ❤️ Deep Cleaned 2BR 🧽  Downtown @ San Jose"
				description="Wonderful, bright and brand new home in downtown San Jose."
				price="$249 / night"
				/>
				<Card 
				src="https://a0.muscache.com/im/pictures/2fdc35d5-1b05-4fc3-b751-c19024a66056.jpg?aki_policy=xx_large"
				title="High-End Loft on Main Street"
				description="This spectacular private loft boasts open spaces with hardwoo..."
				price="$249 / night"
				/>
			</div>
			<div className="home_section">
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
			</div>
			<div className="home_section">
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
			</div>
			<div className="home_section">
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
				<Card 
				src=""
				title=""
				description=""
				price=""
				/>
			</div>
		</div>
	);
}

export default Home;
