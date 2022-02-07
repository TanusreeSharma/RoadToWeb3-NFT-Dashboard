1. Open terminal.
2. Run below command:
     npm install
  
3. Run below command:
    npm start
    
    ![Screen Shot 2022-02-06 at 8 03 18 PM](https://user-images.githubusercontent.com/38181397/152714060-2387a795-b9f5-47c9-b2b2-9940cb1240b2.png)

    
    
Use of tools and Resources---
1. ETH wallet connection to authenticate and user dashboard creation
2. Moralis API https://admin.moralis.io/servers# for NFT curation
3. State of art Computer vision algorithm to identify similar NFTs

Reference code---
1. https://github.com/ethereum-boilerplate/ethereum-boilerplate
2. https://github.com/ethereum-boilerplate/ethereum-nft-marketplace-boilerplate
3. providers/MoralisDappProvider --- code used from https://github.com/ethereum-boilerplate/ethereum-nft-marketplace-boilerplate


The motivation of this work is a part of our research project where we interviewed NFT users to learn their current practices and challenges. We tried to articulate their challenges into design implication.

Sharma, T., Zhou, Z., Huang, Y., & Wang, Y. (2022). " It's A Blessing and A Curse": Unpacking Creators' Practices with Non-Fungible Tokens (NFTs) and Their Communities. arXiv preprint arXiv:2201.13233.https://arxiv.org/abs/2201.13233

For the score of this hackathon we choose work on mainly UI/UX design to create our react app where users can connect with their wallet and maintain a personalized activities of NFTs resources and collection.

Main Design—
1. Personalized dashboard with waller connect
2. Used morals api to make NFT collection in one place for accessibility for users
3. Developed state of art visual hashing to identify % of similar between NFT (this is done with simulated data)

Future Work---
1. Work on real NFT data from cross chain to train the state of art CV algorithm to identify similarity / difference in NFTs with provenance workflow
2. Scaling the current design backend 
3. Creating customized options based on user type

