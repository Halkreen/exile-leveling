const e=`#section Act 3
➞ {enter|1_3_1} #The City of Sarn
Help and talk to {generic|Clarissa}
➞ {enter|1_3_town} #The Sarn Encampment
➞ {enter|1_3_2} #The Slums
    #sub Head {dir|0}
➞ {enter|1_3_3_1} #The Crematorium
    #sub Follow Stairs
#ifdef LEAGUE_START
    Complete {trial}
#endif
Find and kill {kill|Piety}, take {quest_text|Tolman's Bracelet}
Get {crafting}
{logout}
Talk to {generic|Clarissa}, take {quest_text|Sewer Keys}
Hand in {quest|a3q1} #Lost in Love
➞ {enter|1_3_2} #The Slums
    #sub Head {dir|0}
➞ {enter|1_3_10_1} #The Sewers
Find 1x{quest_text|Platinum Bust}
Get {waypoint_get}
Find 2x{quest_text|Platinum Bust}
➞ {enter|1_3_5} #The Marketplace
Get {waypoint_get}
#ifdef LEAGUE_START
    ➞ {enter|1_3_6} #The Catacombs
        #sub Look around nearby
    Complete {trial}
    Get {crafting}
#endif
{logout}
Hand in {quest|a3q11} #Victario's Secrets
{waypoint|1_3_5} #The Marketplace
➞ {enter|1_3_7} #The Battlefront
    #sub Search {dir|0}
Get {waypoint_get}
    #sub Head {dir|315}
Find and take {quest_text|Ribbon Spool}
    #sub Head {dir|225}
➞ {enter|1_3_8_1} #The Solaris Temple Level 1
    #sub Head {dir|45}
➞ {enter|1_3_8_2} #The Solaris Temple Level 2
    #sub Follow the carpets
➞ {arena|Eternal Laboratory}, get {crafting}
    #sub Follow the carpets
{waypoint|1_3_7} #The Battlefront
➞ {enter|1_3_9} #The Docks
    #sub Head {dir|315}
Find and take {quest_text|Thaumetic Sulphite}
{logout}
{waypoint|1_3_8_2} #The Solaris Temple Level 2
Talk to {generic|Lady Dialla}
Hand in {quest|a3q4} #The Ribbon Spool
Hand in {quest|a3q5} #Fiery Dust, take {quest_text|Infernal Talc}
{waypoint|1_3_10_1} #The Sewers
Burn the {quest_text|Undying Blockage}
Get {crafting}
➞ {enter|1_3_13} #The Ebony Barracks
Get {waypoint_get}
Kill {kill|General Gravicius}
    #sub Head {dir|315}
➞ {enter|1_3_14_1} #The Lunaris Temple Level 1
➞ {enter|1_3_14_2} #The Lunaris Temple Level 2
Find and kill {kill|Piety}, take {quest_text|Tower Key}
    #sub Follow stairs that are going up
    #sub At the fork in the road with wagons, go the route with 1 wagon, not 2
Get {crafting}
{logout}
Hand in {quest|a3q9} #Piety's Pets
Hand in {quest|a3q8} #Sever the Right Hand
{waypoint|1_3_13} #The Ebony Barracks
➞ {enter|1_3_15} #The Imperial Gardens
    #sub Head {dir|45}
Get {waypoint_get}
    #sub Follow the road
#ifdef LEAGUE_START
    Complete {trial}
        #sub Head {dir|0}
    Get {crafting}
    {logout}
    {waypoint|1_3_15} #The Imperial Gardens
#endif
#ifdef LIBRARY
    ➞ {enter|1_3_17_1} #The Library
        #sub Head {dir|315}
    Get {waypoint_get}
    Find {generic|Loose Candle} ➞ {enter|1_3_17_2} #The Archives
    Find 4x{quest_text|Golden Page}
    {logout}
    {waypoint|1_3_17_1} #The Library
        #sub Put currency needed to buy skill gems in inventory
    Hand in {quest|a3q12} #A Fixture of Fate
    {waypoint|1_3_15} #The Imperial Gardens
#endif
➞ {enter|1_3_18_1} #The Sceptre of God
➞ {enter|1_3_18_2} #The Upper Sceptre of God
    #sub The exits can often be found by travelling diagonally.
➞ {arena|Tower Rooftop}, Kill {kill|Dominus, High Templar}
    #sub Look for barricades
`;export{e as default};
