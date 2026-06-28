import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

type ProjectCardProps = {
    status: string;
    title: string;
    company: string;
    year: number;
    summary: string;
    highlights?: string[];
    technologies: string[];

    githubUrl?: string;
    demoUrl?: string;
};

function ProjectCard({ status, title, company, year, summary, highlights = [], technologies, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <Card 
        sx={{ 
            p: 2, 
            maxWidth: 500,
            minHeight: 240,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 0,
            transition: "all .2s ease",
            "&:hover": {
                transform: "translateY(-4px) scale(1.01)",
                boxShadow: 3,
                borderColor: "primary.main"
            },
        }}
    >
        <CardContent>
            {status && (
                <Chip
                    label={status}
                    size="small"
                    color="success"
                    sx={{ mb: 1 }}
                />
            )}
            <Typography 
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    mb: 2
                }}
            >
            {title}
            </Typography>

            <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                    display: "block",
                    mb: 2,
                    fontWeight: 500,
                    opacity: 0.85
                }}
            >
            {company} • {year}
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3,
                    lineHeight: 1.7,
                }}
            >
            {summary}
            </Typography>


            <Stack spacing={1}>
                {highlights.map((item) => (
                    <Stack
                        direction="row"
                        spacing={1}
                        key={item}
                        sx={{ alignItems: "flex-start" }}
                    >
                        <Typography 
                            color="success.main"
                            sx={{ mt: "2px" }}
                        >
                            ✓
                        </Typography>

                        <Typography variant="body2">
                            {item}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Typography
                variant="caption"
                color="text.primary"
                sx={{
                    display: "block",
                    mb: 3,
                    mt: 1,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    opacity: 0.65
                }}
            >
                Technologies
            </Typography>

            <Stack 
                direction="row"
                spacing={1}
                sx={{ 
                    flexWrap: 'wrap',
                    gap: 1,
                    mt: 0
                }} useFlexGap
            >
            {technologies.map((tech) => (
                <Chip 
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{ 
                        backgroundColor: "background.default"
                    }}
                />
            ))}
            </Stack>

            {(githubUrl || demoUrl) && (
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    }}
                >
                    {githubUrl && (
                    <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={githubUrl}
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    )}

                    {demoUrl && (
                    <Button
                        size="small"
                        endIcon={<LaunchIcon />}
                        href={demoUrl}
                        target="_blank"
                    >
                        Live Demo
                    </Button>
                    )}
                </Box>
                )}
        </CardContent>
        </Card>
  );
}

export default ProjectCard;