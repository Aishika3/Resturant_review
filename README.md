
# Resturant Review

This repository contains a simple Solana program for managing reviews. Users can add and update reviews, and the state of the reviews is stored on-chain. The program is complemented by a basic React frontend for interacting with the Solana blockchain.
# Location Page
![App Screenshot](https://drive.google.com/uc?id=1Dkx0FBaVELIq1hDmRWHLhSpnVyen9fg5) 

# Wallet Selection Page
![App Screenshot](https://drive.google.com/uc?id=1H47QLWU85ZocvC11UN_0QyY-t3c9BbKD) 

## Smart Contract

### Instruction

The smart contract defines two instructions:

1. **AddReview:** Adds a new review to the state.

2. **UpdateReview:** Updates an existing review in the state.

### State

The state of the smart contract is represented by the `AccountState` struct, which includes:

- `is_initialized`: A flag indicating whether the account has been initialized.
- `rating`: The rating given in the review.
- `description`: The textual description of the review.
- `title`: The title of the review.

### Error Handling

Custom errors are defined in the `ReviewError` enum, which includes:

- `UninitializedAccount`: Raised when trying to interact with an uninitialized account.
- `InvalidPDA`: Raised when the derived PDA does not match the expected PDA.
- `InvalidRating`: Raised when the provided rating is greater than 10 or less than 1.

## Frontend

The React frontend provides a simple user interface for interacting with the Solana smart contract.

### Components

- **AppBar:** The top navigation bar.
- **ReviewCard:** Displays information about a single review.
- **ReviewForm:** Allows users to submit new reviews.

### Functionality

- Users can submit new reviews using the `ReviewForm`.
- Reviews are displayed using the `ReviewCard` component.
- The program ID for the Solana smart contract is specified as `REVIEW_PROGRAM_ID`.
- Transactions are submitted to Solana using the `@solana/web3.js` library.
- Basic error handling is implemented for transactions.

## How to Run

1. Deploy the Solana smart contract.
2. Update the `REVIEW_PROGRAM_ID` in the frontend with the deployed program ID.
3. Run the React app.

### Note

- This is a basic example and does not include production-ready features like security checks, user authentication, or comprehensive error handling.
- Ensure you have the necessary Solana wallet and environment set up before running the application.

Feel free to explore, modify, and enhance the code as needed for your specific use case.

## Getting Started

First, install required libraries:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
