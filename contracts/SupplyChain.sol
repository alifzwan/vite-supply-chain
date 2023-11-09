// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SupplyChain{
    address public Owner;

    constructor(){
        Owner = msg.sender; // msg.sender - whoever deploy this contract (owner)
    }


    /* MODIFIER
      
      Notes: https://solidity-by-example.org/function-modifier/

      - Let's say that there's a lot of function that we want it to be only can be access by Owner

      - Normaly we add this line:
        require(msg.sender == owner, "Sender is not owner!");

      - However, we dont want this line to be in all function right?

      - That's where Modifier comes in.


      The " _; "
      - If you put it under, it will tell the function to do the modifier first
      - If you put it above, it will tell the function to do the function first 
       */

    modifier onlyOwner(){
        require(msg.sender == Owner, "Not owner");
        _;      
                
    }
   
    /* Supply Chain Flow

            Farmer ---> Manufacturer ---> Distributor --> Retailer


        Farmer       - This is where the Manufacturer get their raw material 

        Manufacturer - Several manufacture will process the raw material 

        Distributor  - This is where we distribute the processed item to numerous store

        Supermarket  - Jaya Grocer for example will receive the processed item from the distributor and will be sold
                       in the store 


        Objectives:

        - Develop decentralized food supply chain management that implementing blockchain technology, smart contract and consensus algorithm 
          which could monitor food quality and safety resulting in improvement on traceability, transparency of food products.       

        - Enable real-time surveillance and monitoring of food product, providing stakeholder with accurate information about quality, 
          safety and origin of the product.


        3 Functions:
        - Register each flow
        - Adding items to the chain
        - Track the items                   

     */

    /* STRUCT 

        Notes: https://www.tutorialspoint.com/solidity/solidity_structs.htm
    
        - Struct types are used to represent a record

        - Suppose you want to keep track of your books in a library. You might want to track the following attributes about each book

        -> Title
        -> Author
        -> Subject
        -> Book ID

        struct Book { 
            string title;
            string author;
            string subject;
            uint256 book_id;

        }

     */


    
    // Establish count for each flow 
    uint256 public farmerCount = 0;
    uint256 public manufacturerCount = 0;
    uint256 public distributorCount = 0;
    uint256 public retailerCount = 0;
    uint256 public itemsCount = 0;
    
    /* ENUM
        
        Notes: https://solidity-by-example.org/enum/

        - Enum is user-defined data type that allows you to define a set of named values. 

        - Let's say you're making a game about different animals. You might want to keep track of what kind of animal a player has chosen. You could use an enum to do this. 

        Example: 

        contract AnimalGame {
            enum Animal { Dog, Cat, Bird, Fish }

            Animal public player1Choice;
            Animal public player2Choice;

            function player1ChooseDog() public {
                player1Choice = Animal.Dog;
            }

            function player1ChooseCat() public {
                player1Choice = Animal.Cat;
            }

            function player2ChooseBird() public {
                player2Choice = Animal.Bird;
            }

            function player2ChooseFish() public {
                player2Choice = Animal.Fish;
            }
        }

        - In this example, we have a game where two players can choose between four different animals: Dog, Cat, Bird, and Fish. We use an enum called Animal to define these options.

        - The AnimalGame contract has two variables, player1Choice and player2Choice, to keep track of the choices made by the players. 
        - We also have functions like player1ChooseDog, player1ChooseCat, player2ChooseBird, and player2ChooseFish to allow the players to make their choices.
    */
    enum PHASE{
        Plugin,
        Farmer,
        Manufacturer,
        Distribution,
        Retail,
        Sold
    }
    
    struct items{
        uint256 id;
        string name;
        string categories;
        string brand;
        string origin;
        string nutritionInfo;

        uint256 farmerId;
        uint256 manufacturerId;
        uint256 distributorId;
        uint256 retailerId;
        PHASE chronology;
    } 

    mapping(uint256 => items) public myItems;


    function Chronology(
        uint256 itemID
    ) public view returns (string memory){
        require(itemsCount > 0);
        if(myItems[itemID].chronology == PHASE.Plugin)
            return "Your item is already Ordered. Please wait for further processes.";
        if(myItems[itemID].chronology == PHASE.Farmer)     
            return "Your item is being collected by the farmers. Please wait for further processes.";     
        if(myItems[itemID].chronology == PHASE.Manufacturer)            
            return "Your item is being manufactured. Please wait for further processes.";  
        if(myItems[itemID].chronology == PHASE.Distribution)            
            return "Your item is being distrubuted. Please wait for further processes.";  
        if(myItems[itemID].chronology == PHASE.Retail)            
            return "Your item is safely at the store.";  
        if(myItems[itemID].chronology == PHASE.Sold)            
            return "Your item is already sold.";  

        return "Unknown item chronology";
    }

    /* MAPPING

        Notes: https://www.tutorialspoint.com/solidity/solidity_mappings.htm

        - It's like storing a state variable
        - string items = "meat"

        However, in this case we store a struct:

            mapping(uint256 => farmer) public myFarmer

        We store struct "farmer" into the myFarmer that will be used in the future

     */



    struct farmer{
        uint256 id;
        address accountAddress;
        string farmerName;
        string location;
    }

    
    mapping(uint256 => farmer) public myFarmer;


    struct manufacturer{
        uint256 id;
        address accountAddress;
        string manufacturerName;
        string location;
    }

    mapping(uint256 => manufacturer) public myManufacturer;


    struct distributor{
        uint256 id;
        address accountAddress;
        string distributorName;
        string location;
    }

    mapping(uint256 => distributor) public myDistributor;


    struct retailer{
        uint256 id;
        address accountAddress;
        string retailerName;
        string location;
    }

    mapping(uint256 => retailer) public myRetailer;

    /*-----------------Register Each Flow----------------------
     Farmer ---> Manufacturer ---> Distributor --> Retailer


        Farmer       - This is where the Manufacturer get their raw material 

        Manufacturer - Several manufacture will process the raw material 

        Distributor  - This is where we distribute the processed item to numerous store

        Supermarket  - Jaya Grocer for example will receive the processed item from the distributor and will be sold
                       in the store 



        OnlyOwner:                       
        - So the onlyOwner is to make sure only Owner can register the flow
        - This ensure that the system is secure and being handled by authorize person

        // The count will increase. The Owner will register 3 attributes occupied with the flow.
     */
    /* Data Location

        Notes: https://solidity-by-example.org/data-locations/

        Variables are declared as either storage, memory or calldata to explicitly specify the location of the data.

        storage  - variable is a state variable (store on blockchain)
        memory   - variable is in memory and it exists while a function is being called
        calldata - special data location that contains function arguments


     */
    function regFarmer(
        address _account_Address,    // This is wallet address 
        string memory _farmName,
        string memory _location
    )public onlyOwner{
        farmerCount++;
        myFarmer[farmerCount] = farmer(farmerCount, _account_Address, _farmName, _location);
    }
        

    function regManufacturer(
        address _account_Address,
        string memory _manufacturerName,
        string memory _location
    )public onlyOwner{
        manufacturerCount++;
        myManufacturer[manufacturerCount] = manufacturer(manufacturerCount, _account_Address, _manufacturerName, _location);
     }
        
    
    function regDistributor(
        address _account_Address,
        string memory _distributorName,
        string memory _location
    )public onlyOwner{
         distributorCount++;
         myDistributor[distributorCount] = distributor(distributorCount, _account_Address, _distributorName, _location);
    }
       

    function regRetailer(
        address _account_Address,
        string memory _retailerName,
        string memory _location
    )public onlyOwner{
        retailerCount++;
        myRetailer[retailerCount] = retailer(retailerCount, _account_Address, _retailerName, _location);
    }


    /*-----------------Ordering----------------------
      
     So the function will going to consists with approximately 3 attributes (Well for now):
        => Origin - Where this items come from
        => Nutrition Information - net weight, how many carbs, fat, sodium , and etc
        => Name - Mister Potato
        => Brand - Mamee
        => Categories - Snacks 
        => As well as the id of each flow since we going to track the
           progress of food items through the supply chain.

     function orderItems{
        string name
        string categories
        string brand
        string origin 
        string nutritionInfo
    
        uint256 id
        uint256 farmerId
        uint256 manufacturerId
        uint256 distributorId
        uint256 retailerId

     }

     struct items{
         uint256 Id;
         string name;
         string categories;
         string brand;
         string origin;
         string nutritionInfo;
        
         uint256 farmerId;
         uint256 manufacturerId;
         uint256 distributorId;
         uint256 retailerId;
         PHASE chronology;
     } 
     */
     

    function orderItems(
        string memory _name,
        string memory _categories,
        string memory _brand,
        string memory _origin, 
        string memory _nutritionInfo

    )public onlyOwner{
        require((farmerCount > 0) && (manufacturerCount > 0) && (distributorCount > 0) && (retailerCount > 0));
        itemsCount++;
        myItems[itemsCount] = items(itemsCount, _name, _categories, _brand, _origin, _nutritionInfo, 0, 0, 0, 0, PHASE.Plugin);


    }
    /* ----------------Tracking------------------
    
    The Flow is going to be like this:-

    Farmer ==> Manufacturer ==> Distributor ==> Retailer 
    
    We going to track the items through Supply Chain


    uint256 public farmerCount = 0;
    uint256 public manufacturerCount = 0;
    uint256 public distributorCount = 0;
    uint256 public retailerCount = 0;
    uint256 public itemsCount = 0;

    struct items{
        uint256 Id;
        string name;
        string categories;
        string brand;
        string origin;
        string nutritionInfo;

        uint256 farmerId;
        uint256 manufacturerId;
        uint256 distributorId;
        uint256 retailerId;
        PHASE chronology;
    } 

    enum PHASE{
        Plugin,  
        Farmer,
        Manufacturer,
        Distribution,
        Retail,
        Sold
    }

    */
    
    // To change the flow from Ordered ==> Farmer
    function Farmering(uint256 itemID) public{
        require (itemID > 0 && itemID <= itemsCount);  
        uint256 _id = trackFarmer(msg.sender);
        require(_id > 0);
        require(myItems[itemID].chronology == PHASE.Plugin);
        myItems[itemID].farmerId = _id;
        myItems[itemID].chronology = PHASE.Farmer;

    }

    // To track 
    function trackFarmer(address _account_Address) private view returns (uint256){
        require(farmerCount > 0);
        for(uint256 i = 1; i <= farmerCount; i++){
            if(myFarmer[i].accountAddress == _account_Address) return myFarmer[i].id;
        }
        return 0;
    }



    // To change the flow from Farmer ==> Manufacturer
    function Manufacturing(uint256 itemID) public{
        require (itemID > 0 && itemID <= itemsCount);  
        uint256 _id = trackManufacture(msg.sender);
        require(_id > 0);
        require(myItems[itemID].chronology == PHASE.Farmer);
        myItems[itemID].manufacturerId = _id;
        myItems[itemID].chronology = PHASE.Manufacturer;

    }

    function trackManufacture(address _account_Address) private view returns (uint256){
        require(manufacturerCount > 0);
        for(uint256 i = 1; i <= manufacturerCount; i++){
            if(myManufacturer[i].accountAddress == _account_Address) return myManufacturer[i].id;
        }
        return 0;
    }

    // To change the flow from Manufacturer ==> Distributor
    function Distributing(uint256 itemID) public{
        require (itemID > 0 && itemID <= itemsCount);  
        uint256 _id = trackDistribution(msg.sender);
        require(_id > 0);
        require(myItems[itemID].chronology == PHASE.Manufacturer);
        myItems[itemID].distributorId = _id;
        myItems[itemID].chronology = PHASE.Distribution;

    }

    function trackDistribution(address _account_Address) private view returns (uint256){
        require(distributorCount > 0);
        for(uint256 i = 1; i <= distributorCount; i++){
            if(myDistributor[i].accountAddress == _account_Address) return myDistributor[i].id;
        }
        return 0;
    }

    // To change the flow from Distributor ==> Retail
    function Retailing(uint256 itemID) public{
        require (itemID > 0 && itemID <= itemsCount);  
        uint256 _id = trackRetailer(msg.sender);
        require(_id > 0);
        require(myItems[itemID].chronology == PHASE.Distribution);
        myItems[itemID].retailerId = _id;
        myItems[itemID].chronology = PHASE.Retail;

    }

    function trackRetailer(address _account_Address) private view returns (uint256){
        require(retailerCount > 0);
        for(uint256 i = 1; i <= retailerCount; i++){
            if(myRetailer[i].accountAddress == _account_Address) return myRetailer[i].id;
        }
        return 0;
    }


    // To change the flow from Retail ==> Sold
     function Sold(uint256 itemID) public view{
        require (itemID > 0 && itemID <= itemsCount);  
        uint256 _id = trackRetailer(msg.sender);
        require(_id > 0);
        require(_id == myItems[itemID].retailerId);
        require(myItems[itemID].chronology == PHASE.Retail);
        myItems[itemID].chronology == PHASE.Sold;

    }
}