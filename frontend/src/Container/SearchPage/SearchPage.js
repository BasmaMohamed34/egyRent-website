import React from 'react';
import './SearchPage.css';
import SearchResult from "../SearshResult/SearchResult";
// import Select from 'react-select';




const places = [
  { value: 'Entire place', label: 'Entire place' },
  { value: 'Private room', label: 'Private room' },
  { value: 'Shared room', label: 'Shared room' },
];

const room = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const price = [
    { value: 'less', label: 'Less Than 100 L.E' },
    { value: 'range', label: '100 L.E < Price < 200 L.E' },
    { value: 'higher', label: 'higher Than 200 L.E' },
  ];




class SearchPage extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
    selectedOption3: null,

  };


  handleChange1 = selectedOption1 => {
    this.setState({ selectedOption1 });
  };
  handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2 });
  };
  handleChange3 = selectedOption3 => {
    this.setState({ selectedOption3 });
  };


  render() {
    const { place } = this.state;
    const { selectedOption2 } = this.state;
    const { selectedOption3 } = this.state;


    return (
        <div>
            <div className='searchPage__info' >
                 <h1>Stays Nearby</h1>
                 <div className='select'>
                    {/* <Select placeholder="Select Type Of Place" value={place} onChange={this.handleChange1} options={places}/> */}
                    {/* <Select placeholder="Select Number Of Room" value={selectedOption2} onChange={this.handleChange2} options={room}/> */}
                    {/* <Select placeholder="Select Price Range" value={selectedOption3} onChange={this.handleChange3} options={price}/>   */}
                 </div>
               
            </div>

            <div className='searchPage'>
            <div >
               
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="30 L.E / night"
                total="L.E total"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="50 L.E / night"
                total="L.E157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="100 L.E / night"
                total="L.E207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price=" 113 L.E / night"
                total="L.E320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="225 L.E / night"
                total="L.E450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="205 L.E / night"
                total="L.E480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="300 L.E / night"
                total="L.E650 total"
            />
        </div>

            

        </div>
        

    );

  }
}
export default SearchPage


