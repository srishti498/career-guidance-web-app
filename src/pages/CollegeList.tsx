import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star,
  Users,
  GraduationCap,
  DollarSign,
  Award,
  BookOpen
} from "lucide-react";

const CollegeList = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location') || 'india';
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("ranking");
  const [filterBy, setFilterBy] = useState("all");

  // Mock college data
  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology, Delhi",
      location: "Delhi, India",
      type: "Engineering",
      ranking: 1,
      rating: 4.8,
      fees: "₹2,50,000",
      placements: "95%",
      description: "Premier engineering institute with excellent research facilities and industry connections.",
      courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
      facilities: ["Research Labs", "Hostel", "Sports Complex", "Library"]
    },
    {
      id: 2,
      name: "All India Institute of Medical Sciences",
      location: "Delhi, India", 
      type: "Medical",
      ranking: 1,
      rating: 4.9,
      fees: "₹1,20,000",
      placements: "100%",
      description: "Top medical college in India with state-of-the-art facilities and experienced faculty.",
      courses: ["MBBS", "MD", "MS", "Nursing"],
      facilities: ["Hospital", "Research Center", "Hostel", "Library"]
    },
    {
      id: 3,
      name: "Indian Institute of Management, Ahmedabad",
      location: "Ahmedabad, India",
      type: "Management",
      ranking: 1,
      rating: 4.7,
      fees: "₹25,00,000",
      placements: "100%",
      description: "Premier business school offering world-class management education.",
      courses: ["MBA", "PGDM", "Executive MBA"],
      facilities: ["Case Study Rooms", "Hostel", "Sports", "Alumni Network"]
    },
    {
      id: 4,
      name: "Stanford University",
      location: "California, USA",
      type: "Engineering",
      ranking: 2,
      rating: 4.9,
      fees: "$55,000",
      placements: "98%",
      description: "World-renowned university with cutting-edge research and innovation.",
      courses: ["Computer Science", "Data Science", "AI/ML", "Bioengineering"],
      facilities: ["Research Labs", "Tech Incubator", "Campus Housing", "Recreation Center"]
    },
    {
      id: 5,
      name: "Harvard University",
      location: "Massachusetts, USA",
      type: "Medical",
      ranking: 1,
      rating: 4.9,
      fees: "$58,000",
      placements: "100%",
      description: "Ivy League institution with exceptional medical and research programs.",
      courses: ["Medicine", "Public Health", "Biomedical Sciences"],
      facilities: ["Medical Center", "Research Institute", "Dormitories", "Libraries"]
    }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesLocation = location === 'india' 
      ? college.location.includes('India')
      : !college.location.includes('India');
    
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterBy === 'all' || college.type.toLowerCase() === filterBy.toLowerCase();
    
    return matchesLocation && matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {location === 'india' ? 'Colleges in India' : 'International Colleges'}
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the best colleges that match your career goals and preferences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border rounded-lg p-6 mb-8 shadow-soft animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges, courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="management">Management</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Ranking</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="fees">Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* College Cards */}
        <div className="space-y-6 animate-slide-up">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{college.name}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{college.location}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="text-sm">
                            #{college.ranking} Ranking
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="font-medium">{college.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{college.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Popular Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {college.courses.slice(0, 3).map((course, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Facilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {college.facilities.slice(0, 3).map((facility, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-64 bg-muted/30 rounded-lg p-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{college.fees}</div>
                        <div className="text-sm text-muted-foreground">Annual Fees</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-semibold text-success">{college.placements}</div>
                        <div className="text-sm text-muted-foreground">Placement Rate</div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button asChild className="w-full" variant="gradient">
                          <Link to={`/college/${college.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button asChild className="w-full" variant="outline">
                          <Link to={`/college/${college.id}/apply`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-muted-foreground mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeList;