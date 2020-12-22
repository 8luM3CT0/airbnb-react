import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage_info">
				<p>62 stays · 26 august to 30 august · 2 guest</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
			img="https://a0.muscache.com/im/pictures/5115fe99-9626-4580-a1f1-91ca96f7899d.jpg?im_w=1200"
			location="Entire apartment in Palo Alto"
			title="Beautifully furnished 1BR w A/C near Stanford"
			description="4 guests · 1 bedroom · 2 beds · 1 bath"
			star={3.98}
			price="$97 / night"
			total="$1,226 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/da42dbdd-a551-4275-9630-eac2269fbb00.jpg?im_w=1200"
			location="Entire serviced apartment in Mountain View"
			title="TRIBE ❤️ Deep Cleaned 🧽 Cute 1BR @ Mountain View"
			description="4 guests · 1 bedrooom · 1 bed · 1 bath "
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.77}
			price="$177 / night"
			total="$1,965 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/98cd1589-54ee-49d0-96b6-10b73aa62f52.jpg?im_w=1200"
			location="Entire apartment in Menlo Park"
			title="2BR Steps From Downtown Menlo Park"
			description="5 guests · 2 bedrooom · 3 beds · 1 bath "
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.94}
			price="$258 / night"
			total="$2,873 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/6e9e78b2-35d5-4177-a382-8b0ce024f3de.jpg?im_w=1200"
			location="Entire house in Palo Alto"
			title="Spacious 5B2.5B/Sports Channel/Speed wifi/Stanford"
			description="12 guests · 5 bedrooom · 8 bed · 2.5 bath "
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.97}
			price="$474 / night"
			total="$5,097 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/ae319eea-b78a-48fb-9d53-7f478d6ed217.jpg?im_w=1200"
			location="Entire serviced apartment in Mountain View"
			title="Urban Flat | Fully Sanitized | Perfect for Biz"
			description="4 guests · 1 bedrooom · 1 bed · 1 bath "
			description_2nd="WiFi · Kitchen · Washer"
			star={4.80}
			price="$182 / night"
			total="$2,031 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/eec24b9b-30f2-46b8-8d71-e4e9ae4218e7.jpg?im_w=1200"
			location="Entire serviced Apartment in Cupertino"
			title="TRIBE ❤️ Deep Cleaned 🧽 Large Luxury Loft @ Main Street Cupertino"
			description="4 guests · 1 bedrooom · 1 bed · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.23}
			price="$209 / night"
			total="$2,261 total"
			/>
			<SearchResult 
			img="https://homesoftherich.net/wp-content/uploads/2016/03/Screen-Shot-2016-03-06-at-2.43.03-PM.png"
			location="Entire house in Atherton"
			title="Contemporary House @ 246 Atherton Avenue "
			description="10 guests · 3 bedrooms · 8 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.19}
			price="$410 / night"
			total="$4,432 total"
			/>
			<SearchResult 
			img="https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4108-15/city-gate-at-cupertino-apartments-kitchen-and-washer-and-dryer.jpg"
			location="Entire serviced apartment in Cupertino"
			title="City Gate at Cupertino Apartments"
			description="4 guests · 2 bedrooms · 6 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Washer"
			star={3.98}
			price="$325 / night"
			total="$3,513 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/ac9d9a40-d302-4462-b2d5-fbcd771a25ea.jpg?im_w=1200"
			location="Entire house in Palo Alto"
			title="One block away from Stanford U"
			description="3 guests · 2 bedrooms · 2 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.82}
			price="$198 / night"
			total="$2,140 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/d9d08b14-be33-428b-8773-d4fdca414964.jpg?im_w=1200"
			location="Entire house in Menlo Park"
			title="Cozy Renovated Home near Silicon Valle Tech Firms"
			description="4 guests · 2 bedrooms · 2 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.12}
			price="$218 / night"
			total="$2,357 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/0625b0a0-9890-4c8e-b4b3-8d0150160607.jpg?im_w=1200"
			location="Entire apartment in Palo Alto"
			title="Professorville (Silicon Valley) in Palo Alto"
			description="3 guests · 2 bedrooms · 2 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Washer"
			star={5.0}
			price="$200 / night"
			total="$2,162 total"
			/>
			<SearchResult
			img="https://a0.muscache.com/im/pictures/10f39770-37a4-414f-8a07-6a78eae09d8e.jpg?im_w=1200"
			location="Entire guest suite in Rose Garden"
			title="Brand New Guest Suite + Luxurious Bath, Near SJC"
			description="2 guests · Studio · 1 bed · 1 bath"
			description_2nd="WiFi · Free Parking"
			star={4.82}
			price="$50 / night"
			total="$540.5 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/731f643c-7c3c-49d9-8c1e-54bd19242289.jpg?im_w=1200"
			location="Entire house in Mountain View"
			title="Cute two bedroom house in fantastic location!"
			description="6 guests · 2 bedrooms · 5 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.86}
			price="$138 / night"
			total="$1,492.78 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/81b0bae7-ebb2-473b-8407-6fc48d95717e.jpg?im_w=1200"
			location="Entire house in Cupertino"
			title="2 bed 2 bath New home with Designer furnishings"
			description="4 guests · 2 bedrooms · 2 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.92}
			price="$142 / night"
			total="$1,535.02 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/9ef24a3c-b6e0-4d1a-87d3-8d4c7cbb9a3a.jpg?im_w=1200"
			location="Entire apartment in Mountain View"
			title="Spacious, Soaring Ceilings, Near Downtown MV, GOOG"
			description="2 guests · 1 bedroom · 1 bed · 1 bath"
			description_2nd="WiFi · Kitchen· Washer"
			star={4.78}
			price="$142 / night"
			total="$745.89 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/0d29e16c-2c17-4389-8252-da1fc044dcca.jpg?im_w=1200"
			location="Entire house in Central San Jose"
			title="Charming Home neaby San Jose Downtown/SAP/A..."
			description="6 guests · 2 bedrooms · 4 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.97}
			price="$149 / night"
			total="$1,610.68 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/7a3f7e10-c154-4441-b18d-b290a38cdf8f.jpg?aki_policy=xx_large"
			location="Entire guesthouse in Portola Valley"
			title="Woodsy Silicon Valley Cottage"
			description="2 guests · Studio · 1 bed · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.94}
			price="$170 / night"
			total="$1,837.7 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/7ffc0c3d-8e9b-4db1-a3f5-13025e7fb0cb.jpg?im_w=1200"
			location="Entire house in San Jose"
			title="Privacy + comfort in San Jose, ozone disinfected!"
			description="3 guests · 1 bedroom · 2 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.92}
			price="$79 / night"
			total="$853.99 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/ad73509a-fcc8-41f3-8806-5ff2e14a9339.jpg?im_w=1200"
			location="Entire guest suite in Sunnyvale"
			title="Pvt Furnshd Studio-Sunnyvale-Wlkbl2Caltrain-9 Mins"
			description="2 guests · 1 bedroom · 1 bed · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.25}
			price="$49 /night"
			total="$529.69 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/efc90188-cf22-4f75-b428-efadcf6ac003.jpg?im_w=1200"
			location="Entire house in San Jose"
			title="West San Jose two bedroom sleeps 6~near Harker"
			description="6 guests · 2 bedrooms · 5 beds · 2 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.39}
			price="$107 / night"
			total="$1,156.57 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/88d3ca9d-2b53-463a-8652-780d5b5452b2.jpg?im_w=1200"
			location="Entire house in Mountain View"
			title="Luxury 5-Star Fully Sanitized No-Contact Entry"
			description="6 guests · 2 bedrooms · 4 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$198 /night"
			total="$2,140.38 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/64124e0c-ec46-48f0-b9db-cd10177cce2a.jpg?im_w=1200"
			location="Entire house in Santa Clara"
			title="3BD/2BA Home with AC, Covered Patio & Fenced Yard"
			description="6 guests · 3 bedrooms · 4 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.96}
			price="$207 / night"
			total="$2,237.67 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/554ee8dd-a5d0-419a-97bd-28a3258da056.jpg?im_w=1200"
			location="Entire house in Santa Clara"
			title="Peace, eat & sleep in your private cozy cottage"
			description="4 guests · 3 bedrooms · 3 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.90}
			price="$169 / night"
			total="$1,826.89 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/d821e7f7-252b-485c-a0f7-c79f98d91e5d.jpg?im_w=1200"
			location="Entire house in San Jose"
			title="💎WELL-KEPT in SAN JOSE Near Health FACILITIES💎"
			description="10 guests · 3 bedrooms · 5 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$183 / night"
			total="$1,978.23 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/554ee8dd-a5d0-419a-97bd-28a3258da056.jpg?im_w=1200"
			location="Entire house in Sunnyvale"
			title="@ Marbella Lane - Executive Stay in Sunnyvale"
			description="7 guests · 3 bedrooms · 4 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$160 / night"
			total="$1,729.6 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/miso/Hosting-46819455/original/42478456-8099-4257-8206-cf728b400147.jpeg?im_w=720"
			location="Entire house in Cambrian/Pioneer"
			title="Spacious and Cozy 3 BR home in tranquil San Jose"
			description="8 guests · 3 bedrooms · 3 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.55}
			price="$127 / night"
			total="$1,372.87 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/a4b5bb31-64db-42fd-84ea-daebf4d28f02.jpg?im_w=720"
			location="Entire apartment in Sunnyvale"
			title="2592 New 2B1B Business Unit Kitchen"
			description="5 guests · 2 bedrooms · 3 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.13}
			price="$168 / night"
			total="$1,816.08 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/2b022ecf-f166-4aff-913d-7befbc868f69.jpg?im_w=1200"
			location="Entire apartment in Sunnyvale"
			title="Two Bedroom with Numerous High-End amenities"
			description="5 guests · 2 bedrooms · 2 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.67}
			price="$160 / night"
			total="$1,729.6 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/bf180286-b5d8-442b-8266-7a97dac476b2.jpg?im_w=1200"
			location="Entire serviced apartment in San Jose"
			title="Relax in your own apt | 2BR in San Jose"
			description="5 guests · 2 bedrooms · 2 beds · 1 bath"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.73}
			price="$160 / night"
			total="$1,729.6 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/88a2c550-e859-494e-8d69-51b486d38a8a.jpg?im_w=1200"
			location="Entire apartment in Sunnyvale"
			title="2591 New Fancy 3B2B Sunnyvale"
			description="6 guests · 3 bedrooms · 4 beds · 2 baths"
			description_2nd="WiFi · Free parking · Washer"
			star={5}
			price="$168 / night"
			total="$1,816.08 total"
			/>
			<SearchResult
			img="https://a0.muscache.com/im/pictures/0dd093dd-6ed2-45f9-984e-1b5780401f13.jpg?im_w=1200"
			location="Entire house in Portola Valley"
			title="Bright, modern 3 bd/3 ba Portola Valley"
			description="5 guests · 3 bedrooms · 3 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.98}
			price="$318 / night"
			total="$3,437.58 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/ccfb7c73-58d3-4412-ae19-3274a0f98a9b.jpg?im_w=1200"
			location="Entire house in Mountain View"
			title="New Contemporary 4-bed house in Downtown Ca..."
			description="6 guests · 4 bedrooms · 3 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.98}
			price="$400 / night"
			total="$4,324 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/60493af2-4c2b-4c9c-b9eb-9006a211d06c.jpg?im_w=1200"
			location="Entire house in Belmont"
			title="Designer Villa with Views - Work Travel & Family"
			description="12 guests · 5 bedrooms · 5 beds · 3.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.82}
			price="$404 / night"
			total="$4,367.24 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/b6866be0-9d87-4212-8b9e-bd9a192aaf98.jpg?im_w=720"
			location="Entire house in Palo Alto"
			title="Palo Alto Modern Retreat"
			description="6 guests · 3 bedrooms · 3 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$500 / night"
			total="$5,405.00 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/af8ee046-5133-405c-ae49-56d8187818f4.jpg?im_w=1200"
			location="Entire house in Palo Ato"
			title="Stunning Modern 4bd Downtown Palo Alto, Stanford"
			description="8 guests · 4 bedrooms · 5 beds · 3.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.86}
			price="$349 / night"
			total="$3,772.69 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/c83dc272-589f-40eb-9cce-378bd08b6a9a.jpg?im_w=720"
			location="Entire  house in San Jose"
			title="Brand New House in Downtown by Airport. 4br/3baths"
			description="10 guests · 4 bedrooms · 5 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$366 / night"
			total="$3,956.46 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/bec9571a-0e12-411d-a6f4-2922cfeaeb20.jpg?im_w=720"
			location="Entire serviced apartment in San Jose"
			title="TRIBE ❤️ Deep Cleaned 🧽 2BR @Downtown San Jose"
			description="5 guests · 2 bedrooms · 2 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Washer"
			star={4.89}
			price="$249 / night"
			total="$2,691.69 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/a09b4f77-48f3-4196-a594-4d6f195efdaa.jpg?aki_policy=xx_large"
			location="Entire house in San Jose"
			title="Bright and Relaxed Family/Business House in Silicon Valley"
			description="8 guests · 4 bedrooms · 5 beds · 3 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.95}
			price="$370 /night"
			total="$3,999.7 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/af99c485-80ea-45a7-b8c7-170ddc3224c7.jpg?im_w=1200"
			location="Entire serviced apartment in San Jose"
			title="TRIBE ❤️ Deep Cleaned 🧽 2BR @ Downtown San Jose"
			description="5 guests · 2 bedrooms · 3 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Washer"
			star={4.38}
			price="$249 / night"
			total="$2,691.69 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/99860771/e516bc21_original.jpg?im_w=720"
			location="Entire house in Portola Valley"
			title="Sweeping View Private Spa Estate "
			description="12 guests · 6 bedrooms · 6 beds · 6.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$1,497 / night"
			total="$16,182.57 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/68983305/b6dad5ab_original.jpg?im_w=1200"
			location="Entire apartment in San Jose"
			title="4BR House Beautiful Neighborhood walk to Train"
			description="9 guests · 4 bedrooms · 5 beds · 2.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$320 / night"
			total="$3,459.2 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/e41b9655-fda0-4659-ae70-36966b960d9b.jpg?im_w=1200"
			location="Entire house in San Mateo"
			title="Serene Modern Home w/Private Yard"
			description="12 guests · 6 bedrooms · 9 beds · 2.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.9}
			price="$355 / night"
			total="$3,837.55 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/f9903fca-a8cd-4090-9431-ed7ebb43c67e.jpg?im_w=720"
			location="Entire house in Menlo Park"
			title="Mid-century home in the heart of Silicon Valley"
			description="6 guests · 3 bedrooms · 3 beds · 2 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={4.75}
			price="$328 / night"
			total="$3,545.68 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/8a4194ea-c1f4-459d-adee-25a7ee029b97.jpg?aki_policy=xx_large"
			location="Entire bungalow in Palo Alto"
			title="Luxurious Retreat on Extra-Large Lot near Stanford"
			description="9 guests · 3 bedrooms · 5 beds · 2.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$528 / night"
			total="$5,707.68 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/15a75c24-ae72-455e-92e3-4ec99049ae02.jpg?im_w=1200"
			location="Entire townhouse in Palo Alto "
			title="New Townhome, Stanford, Palo Alto"
			description="6 guests · 4 bedrooms · 4 beds · 3.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$750 / night"
			total="$8,107.5 total"
			/>
			<SearchResult 
			img="https://a0.muscache.com/im/pictures/dd3b6120-062a-4dde-8b12-69d41fb32298.jpg?im_w=1200"
			location="Entire house in Mountain View"
			title="Contemporary Architectural Sanctuary [2 BR/2.5 BA]"
			description="4 guests · 2 bedrooms · 2 beds · 2.5 baths"
			description_2nd="WiFi · Kitchen · Free parking · Washer"
			star={5}
			price="$775 / night"
			total="$8,377.75 total"
			/>
		</div>
	);
}

export default SearchPage;
