    import { Container, Typography } from "@mui/material";
    import ProjectCard from "./ProjectCard";

    const projects = [
    {
        status: "Production",
        title: "Vendor Change Request",
        company: "ProPetro Services",
        year: 2026,
        summary:
        "Automated vendor onboarding for supply chain teams using React, .NET, Microsoft Graph, SharePoint, and SQL Server.",
        highlights: [
            "Automated vendor onboarding workflow",
            "Integrated Microsoft Graph & SharePoint",
            "Role-based security",
            "PDF generation",
        ],
        technologies: [
        "React",
        "TypeScript",
        ".NET",
        "MUI",
        "SQL Server",
        "Azure", ],
        githubUrl: "https://github.com/your-user/your-repo",
        demoUrl: "https://your-demo-url.com",
    },];

    function FeaturedProjects() {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" gutterBottom>
                Featured Projects
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
                A selection of enterprise applications and integrations I've built.
            </Typography>

        {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
        ))}
        </Container>
    );
    }

    export default FeaturedProjects;