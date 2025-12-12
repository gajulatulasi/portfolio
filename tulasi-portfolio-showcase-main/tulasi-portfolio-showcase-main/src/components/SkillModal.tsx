import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Code, BookOpen, Sparkles } from "lucide-react";

interface SkillModalProps {
  skill: {
    name: string;
    category: string;
    description: string;
    proficiency: string;
    keyPoints: string[];
    projects: string[];
    color: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const SkillModal = ({ skill, isOpen, onClose }: SkillModalProps) => {
  if (!skill) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] glass-effect border-primary/20">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold gradient-text">
                {skill.name}
              </DialogTitle>
              <Badge 
                variant="secondary"
                className="mt-2 bg-primary/10 text-primary border-primary/20"
              >
                {skill.category}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {skill.description}
          </DialogDescription>

          {/* Proficiency Level */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Proficiency Level</h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                  style={{ 
                    width: skill.proficiency === 'Advanced' ? '90%' : 
                           skill.proficiency === 'Intermediate' ? '70%' : '50%' 
                  }}
                />
              </div>
              <Badge className={`bg-gradient-to-r ${skill.color} text-white border-0`}>
                {skill.proficiency}
              </Badge>
            </div>
          </div>

          {/* Key Points */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Key Capabilities</h4>
            </div>
            <ul className="space-y-2">
              {skill.keyPoints.map((point, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color} mt-2 flex-shrink-0`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Using This Skill */}
          {skill.projects.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Used In Projects</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.projects.map((project, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    {project}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
