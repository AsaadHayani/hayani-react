import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const numCharacters = 50;
  const displayedText = isExpanded
    ? product.description
    : product.description.slice(0, numCharacters) +
      (product.description.length > numCharacters ? "..." : "");

  const theme = useTheme();
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card
        className="shadow"
        sx={{ border: 1, borderColor: theme.palette.primary.main }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {displayedText}
            </Typography>
            {product.description.length > numCharacters && (
              <Button onClick={toggleExpand} size="small">
                {isExpanded ? "Read less" : "Read more"}
              </Button>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`${product.id}`}>
            <Button size="small" color="primary" variant="contained">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
