import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WorkerCard(props) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="workercard-wrapper"
      style={{ backgroundColor: "#F2E7C9" }}
    >
      <CardMedia
        component="img"
        height="140"
        image="http://www.constructionworld.org/wp-content/uploads/2016/05/growth-plan-construction-business.jpg"
        alt="business logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.businessName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.workCategory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/businesses/${props.businessId}`}>
          View Business
        </Button>
      </CardActions>
    </Card>
  );
}

// const CardContainer = styled.article`
//   flex: 1 1 10em;
//   padding: 1.5em 1em;
//   display: flex;
//   flex-direction: column;
//   row-gap: 2em;
//   border-radius: 5px;
//   max-width: 20vw;
//   box-shadow: 3px 3px 3px #1ec1cb;
//   height: 35vh;
//   background-color: #cddaf4;

//   p {
//     font-size: 1.5rem;
//     &:last-of-type {
//       font-size: 1.25rem;
//     }
//   }
//   .recentWork-btn,
//   .viewBusiness-btn {
//     flex: 1 1 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .recentWork-btn {
//     background: none;
//     border: none;
//     font-size: 1.2rem;
//     text-decoration: underline;
//   }
//   .viewBusiness-btn {
//     width: 100%;
//     flex-basis: 15%;

//     color: white;
//     background-color: #1ec1cb;
//   }

//   button {
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//   }

//   #viewBusiness {
//     color: white;
//   }

//   .header {
//     font-size: 1.25rem;
//   }

//   .subheader {
//     font-size: 0.7rem;
//   }

//   @media screen and (max-width: 1000px) {
//     max-width: 35vw;
//     height: 30vh;
//   }

//   @media screen and (max-width: 768px) {
//     max-width: 90vw;
//   }

//   @media screen and (max-width: 435px) {
//     height: 50vh;
//   }
// `;
