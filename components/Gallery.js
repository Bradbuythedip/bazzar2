import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  Modal,
  Button,
  Rating,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EcoIcon from "@mui/icons-material/Eco";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const fabricTypes = [
  "All",
  "Linen",
  "Cotton",
  "Denim",
  "Wool",
  "Silk",
  "Sustainable Synthetics",
];

const fabricDatabase = [
  {
    id: 1,
    name: "Organic Cotton",
    type: "Cotton",
    image: "/fabrics/organic-cotton.jpg",
    origin: "India",
    bestUseFor: ["T-shirts", "Casual wear", "Summer clothing"],
    sustainability: {
      score: 4.5,
      features: [
        "Organic farming",
        "Low water usage",
        "No harmful pesticides",
        "Fair trade certified",
      ],
    },
    price: "$15/yard",
    weight: "150 gsm",
    description: "Premium organic cotton, perfect for everyday wear. Breathable and gentle on skin.",
    careInstructions: ["Machine washable", "Tumble dry low"]
  },
  {
    id: 2,
    name: "Pure Linen",
    type: "Linen",
    image: "/fabrics/linen.jpg",
    origin: "Belgium",
    bestUseFor: ["Summer suits", "Dresses", "Home decor"],
    sustainability: {
      score: 5.0,
      features: [
        "All-natural fiber",
        "Biodegradable",
        "Low water impact",
        "Long-lasting material"
      ],
    },
    price: "$22/yard",
    weight: "200 gsm",
    description: "Premium European linen with natural slubs. Perfect for elegant summer wear.",
    careInstructions: ["Dry clean recommended", "Hand wash cold"]
  },
  {
    id: 3,
    name: "Heritage Wool",
    type: "Wool",
    image: "/fabrics/wool.jpg",
    origin: "New Zealand",
    bestUseFor: ["Coats", "Winter wear", "Suits"],
    sustainability: {
      score: 4.8,
      features: [
        "Sustainable farming",
        "Natural fiber",
        "Biodegradable",
        "Ethically sourced",
      ],
    },
    price: "$35/yard",
    weight: "350 gsm",
    description: "Luxurious merino wool from sustainable farms in New Zealand.",
    careInstructions: ["Dry clean only", "Steam to refresh"]
  },
  {
    id: 4,
    name: "Raw Silk",
    type: "Silk",
    image: "/fabrics/silk.jpg",
    origin: "Japan",
    bestUseFor: ["Evening wear", "Luxury garments", "Special occasions"],
    sustainability: {
      score: 4.2,
      features: [
        "Traditional methods",
        "Natural fiber",
        "Artisan made",
        "Heritage craft"
      ],
    },
    price: "$45/yard",
    weight: "80 gsm",
    description: "Exquisite raw silk with natural texture, perfect for elegant occasions.",
    careInstructions: ["Dry clean only", "Iron on low heat"]
  },
  {
    id: 5,
    name: "Recycled Denim",
    type: "Denim",
    image: "/fabrics/denim.jpg",
    origin: "USA",
    bestUseFor: ["Jeans", "Jackets", "Bags"],
    sustainability: {
      score: 4.7,
      features: [
        "Recycled materials",
        "Water conservation",
        "Reduced waste",
        "Circular fashion"
      ],
    },
    price: "$20/yard",
    weight: "300 gsm",
    description: "Sustainable denim made from recycled jeans. Durable and eco-friendly.",
    careInstructions: ["Machine wash cold", "Line dry"]
  },
  {
    id: 6,
    name: "Eco-Tech Fabric",
    type: "Sustainable Synthetics",
    image: "/fabrics/sustainable-synthetic.jpg",
    origin: "Sweden",
    bestUseFor: ["Activewear", "Outdoor gear", "Performance clothing"],
    sustainability: {
      score: 4.3,
      features: [
        "Recycled polyester",
        "Energy-efficient production",
        "Zero microplastic",
        "Fully recyclable"
      ],
    },
    price: "$25/yard",
    weight: "180 gsm",
    description: "Innovative sustainable synthetic fabric made from recycled materials.",
    careInstructions: ["Machine wash cold", "Tumble dry low"]
  }
];

const FabricModal = ({ open, handleClose, fabric }) => {
  if (!fabric) return null;
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="fabric-modal-title"
    >
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        maxWidth: 800,
        width: "90%",
        maxHeight: "90vh",
        overflow: "auto",
        borderRadius: 2
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={fabric.image}
              alt={fabric.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 8,
                marginBottom: 16
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              {fabric.name}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h5" color="primary" sx={{ mr: 2 }}>
                {fabric.price}
              </Typography>
              <Chip 
                icon={<EcoIcon />} 
                label={`Sustainability: ${fabric.sustainability.score}/5`}
                color="success"
              />
            </Box>
            <Typography variant="body1" paragraph>
              {fabric.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Origin: {fabric.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Weight: {fabric.weight}
            </Typography>
            <Box mb={2}>
              <Typography variant="subtitle1" gutterBottom>
                Best Used For:
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {fabric.bestUseFor.map((use, index) => (
                  <Chip key={index} label={use} size="small" />
                ))}
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1" gutterBottom>
                Sustainability Features:
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {fabric.sustainability.features.map((feature, index) => (
                  <Chip 
                    key={index} 
                    label={feature} 
                    size="small"
                    icon={<EcoIcon />}
                    color="success"
                  />
                ))}
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1" gutterBottom>
                Care Instructions:
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {fabric.careInstructions.map((instruction, index) => (
                  <Chip key={index} label={instruction} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FavoriteBorderIcon />}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFabricClick = (fabric) => {
    setSelectedFabric(fabric);
    setModalOpen(true);
  };

  const toggleFavorite = (fabricId, event) => {
    event.stopPropagation();
    setFavorites(prev => 
      prev.includes(fabricId)
        ? prev.filter(id => id !== fabricId)
        : [...prev, fabricId]
    );
  };

  const filteredFabrics = selectedTab === 0
    ? fabricDatabase
    : fabricDatabase.filter(fabric => fabric.type === fabricTypes[selectedTab]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 300 }}>
        Sustainable Fabric Gallery
      </Typography>
      
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Discover eco-friendly, high-quality fabrics for your next creation
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
        <Tabs 
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="fabric type tabs"
        >
          {fabricTypes.map((type, index) => (
            <Tab key={index} label={type} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredFabrics.map((fabric) => (
          <Grid item xs={12} sm={6} md={4} key={fabric.id}>
            <Card 
              sx={{ 
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                }
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={fabric.image}
                  alt={fabric.name}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleFabricClick(fabric)}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "background.paper",
                    "&:hover": { bgcolor: "background.paper" }
                  }}
                  onClick={(e) => toggleFavorite(fabric.id, e)}
                >
                  {favorites.includes(fabric.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {fabric.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {fabric.price}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Rating 
                    value={fabric.sustainability.score} 
                    precision={0.5} 
                    readOnly 
                    size="small"
                  />
                  <Tooltip title="Sustainability score">
                    <EcoIcon color="success" fontSize="small" />
                  </Tooltip>
                </Box>
                <Box display="flex" gap={0.5} flexWrap="wrap">
                  {fabric.bestUseFor.slice(0, 2).map((use, index) => (
                    <Chip 
                      key={index} 
                      label={use} 
                      size="small" 
                      sx={{ mb: 0.5 }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <FabricModal 
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        fabric={selectedFabric}
      />
    </Container>
  );
};

export default Gallery;
