## BidPlus - Online Job Portal
**Live Link:** [BidPlus App](https://bidplus.netlify.app/)

---

### Project Features

- **User Authentication:**  
  Users can **create an account** on the BidPlus platform and log in/out securely. This feature is implemented using **Firebase**, ensuring robust authentication and authorization.

- **Job Posting:**  
  Users can hire workers by posting detailed descriptions of their work requirements on the platform.

- **Bidding System:**  
  Users can bid/apply for jobs. When a user attempts to bid on a project, they are redirected to a **details page** where they must submit a form to place their bid.

- **Bid Management:**  
  In the details route, users can click "Place Your Bid," which redirects them to their bids overview. Here, they can see all the jobs they have bid on.

- **Job Owner Interaction:**  
  When a user bids on a job, the job owner receives the user's information, allowing them to accept or reject the bid. The status of the bids will show as either **In Progress** (if accepted) or **Canceled** (if rejected).

### Getting Started

1. **Clone the Repository:**  
   Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/yourusername/bidplus.git
   ```

2. **Install Dependencies:**  
   Navigate to the project directory and install the required dependencies:
   ```bash
   cd bidplus
   npm install
   ```

3. **Configure Firebase:**  
   Set up your Firebase project and add the configuration details in your environment file.

4. **Run the App:**  
   Start the development server to view the app in your browser:
   ```bash
   npm start
   ```

### Technologies Used

- **Frontend:** React.js, React-Router
- **Backend:** Firebase Authentication and Firestore
- **Styling:** CSS / TailwindCSS

### Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to submit a pull request or open an issue.
