import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FolderOpen, ChevronRight, Monitor, Database, Brain, Users, Palette, Shield, ExternalLink, Image, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: number;
  chapter: string;
  title: string;
  icon: typeof Monitor;
  color: string;
  summary: string;
  objectives: string[];
  process: string[];
  tools: string[];
  analysis: {
    strengths: string[];
    improvements: string[];
    lessons: string[];
  };
  aiUsage: string[];
  evidencePlaceholder: string;
}

const projects: Project[] = [
  {
    id: 1,
    chapter: "Chương 1",
    title: "Máy tính và thiết bị ngoại vi",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    summary: "Tìm hiểu về cấu tạo, chức năng của máy tính và các thiết bị ngoại vi. Bài tập giúp tôi hiểu sâu hơn về phần cứng công nghệ mà mình sử dụng hàng ngày.",
    objectives: [
      "Hiểu cấu tạo và nguyên lý hoạt động của máy tính",
      "Phân biệt các loại thiết bị ngoại vi và công dụng",
      "Áp dụng kiến thức để lựa chọn thiết bị phù hợp nhu cầu"
    ],
    process: [
      "Nghiên cứu tài liệu về kiến trúc máy tính",
      "Tổng hợp thông tin về các thiết bị ngoại vi phổ biến",
      "Thực hành nhận diện các thành phần trên máy tính thực tế",
      "Viết báo cáo tổng hợp và phân tích"
    ],
    tools: ["Google Docs", "Google Search", "YouTube"],
    analysis: {
      strengths: ["Trình bày rõ ràng, có hệ thống", "Sử dụng hình ảnh minh họa sinh động"],
      improvements: ["Cần bổ sung thêm so sánh giữa các loại thiết bị", "Nên có phần thực hành nhiều hơn"],
      lessons: ["Hiểu rõ hơn về cách máy tính hoạt động", "Biết cách lựa chọn thiết bị phù hợp với nhu cầu"]
    },
    aiUsage: [
      "Sử dụng AI để gợi ý cấu trúc bài viết",
      "Kiểm tra và chỉnh sửa ngữ pháp với sự hỗ trợ AI",
      "Không sao chép nguyên văn - tự viết lại bằng ngôn ngữ cá nhân"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  },
  {
    id: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    summary: "Học cách tìm kiếm, đánh giá và tổng hợp thông tin từ nhiều nguồn khác nhau. Phát triển kỹ năng phản biện khi tiếp nhận thông tin trên môi trường số.",
    objectives: [
      "Nắm vững kỹ năng tìm kiếm thông tin hiệu quả",
      "Phát triển tư duy phản biện khi đánh giá nguồn tin",
      "Biết cách tổng hợp và trích dẫn thông tin đúng cách"
    ],
    process: [
      "Thực hành tìm kiếm nâng cao trên Google",
      "Đánh giá độ tin cậy của các nguồn thông tin",
      "Tổng hợp thông tin từ nhiều nguồn khác nhau",
      "Trích dẫn nguồn theo chuẩn học thuật"
    ],
    tools: ["Google Scholar", "Google Search", "Notion"],
    analysis: {
      strengths: ["Biết đánh giá nguồn tin", "Trích dẫn đầy đủ và chính xác"],
      improvements: ["Cần mở rộng phạm vi nguồn tham khảo", "Nên sử dụng thêm cơ sở dữ liệu học thuật"],
      lessons: ["Không phải thông tin nào trên mạng cũng đáng tin", "Kỹ năng tìm kiếm là nền tảng của học tập"]
    },
    aiUsage: [
      "AI hỗ trợ gợi ý từ khóa tìm kiếm",
      "Sử dụng AI để tóm tắt tài liệu dài",
      "Tự đánh giá và viết lại nội dung theo cách hiểu cá nhân"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  },
  {
    id: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    summary: "Khám phá thế giới AI - từ lịch sử phát triển đến các ứng dụng hiện đại. Hiểu về cách AI hoạt động và ảnh hưởng của nó đến cuộc sống.",
    objectives: [
      "Hiểu khái niệm và lịch sử phát triển của AI",
      "Nhận biết các loại AI và ứng dụng thực tế",
      "Suy nghĩ về tác động của AI đến xã hội và nghề nghiệp"
    ],
    process: [
      "Nghiên cứu lịch sử và các mốc phát triển của AI",
      "Tìm hiểu về Machine Learning và Deep Learning",
      "Trải nghiệm thực tế các công cụ AI",
      "Phân tích ưu nhược điểm của AI trong các lĩnh vực"
    ],
    tools: ["ChatGPT", "Google Bard", "Canva AI"],
    analysis: {
      strengths: ["Hiểu rõ về các loại AI khác nhau", "Có góc nhìn cân bằng về lợi ích và rủi ro"],
      improvements: ["Cần thực hành nhiều hơn với các công cụ AI", "Nên tìm hiểu sâu hơn về đạo đức AI"],
      lessons: ["AI là công cụ hỗ trợ, không thay thế con người", "Sử dụng AI cần có trách nhiệm và suy nghĩ"]
    },
    aiUsage: [
      "Trực tiếp trải nghiệm các công cụ AI để hiểu cách hoạt động",
      "Sử dụng AI để giải thích các khái niệm phức tạp",
      "Luôn kiểm chứng thông tin từ AI với các nguồn đáng tin cậy"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  },
  {
    id: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    summary: "Phát triển kỹ năng làm việc nhóm và giao tiếp hiệu quả trong môi trường số. Sử dụng các công cụ hợp tác trực tuyến một cách chuyên nghiệp.",
    objectives: [
      "Làm chủ các công cụ giao tiếp và hợp tác trực tuyến",
      "Phát triển kỹ năng làm việc nhóm từ xa",
      "Hiểu về etiquette trong môi trường số"
    ],
    process: [
      "Tìm hiểu và thực hành với các nền tảng hợp tác (Trello, Slack)",
      "Tham gia dự án nhóm sử dụng công cụ số",
      "Thực hành giao tiếp chuyên nghiệp qua email và chat",
      "Đánh giá hiệu quả làm việc nhóm"
    ],
    tools: ["Trello", "Google Meet", "Slack", "Google Drive"],
    analysis: {
      strengths: ["Giao tiếp rõ ràng và chuyên nghiệp", "Sử dụng thành thạo các công cụ hợp tác"],
      improvements: ["Cần cải thiện khả năng quản lý thời gian", "Nên chủ động hơn trong thảo luận nhóm"],
      lessons: ["Giao tiếp số cần rõ ràng và tôn trọng", "Công cụ chỉ hiệu quả khi có sự phối hợp tốt"]
    },
    aiUsage: [
      "AI hỗ trợ soạn thảo email chuyên nghiệp",
      "Sử dụng AI để tóm tắt nội dung cuộc họp",
      "Tự chỉnh sửa và cá nhân hóa nội dung do AI gợi ý"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  },
  {
    id: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    icon: Palette,
    color: "from-rose-500 to-red-500",
    summary: "Học cách tạo ra nội dung số hấp dẫn và chuyên nghiệp. Từ thiết kế đồ họa đến video, phát triển khả năng sáng tạo trong môi trường số.",
    objectives: [
      "Nắm vững nguyên tắc thiết kế cơ bản",
      "Sử dụng thành thạo các công cụ sáng tạo nội dung",
      "Tạo ra sản phẩm số có tính thẩm mỹ và chuyên nghiệp"
    ],
    process: [
      "Học các nguyên tắc thiết kế (màu sắc, bố cục, typography)",
      "Thực hành với Canva để tạo poster, infographic",
      "Tạo video ngắn với CapCut",
      "Nhận phản hồi và cải thiện sản phẩm"
    ],
    tools: ["Canva", "CapCut", "Figma", "Adobe Express"],
    analysis: {
      strengths: ["Sản phẩm có tính thẩm mỹ cao", "Sáng tạo trong cách trình bày"],
      improvements: ["Cần học thêm về animation và motion graphics", "Nên thử nghiệm nhiều phong cách thiết kế"],
      lessons: ["Thiết kế tốt cần hiểu người xem", "Đơn giản thường hiệu quả hơn phức tạp"]
    },
    aiUsage: [
      "Sử dụng AI để gợi ý ý tưởng thiết kế",
      "AI hỗ trợ tạo hình ảnh minh họa",
      "Tự điều chỉnh và hoàn thiện sản phẩm cuối cùng"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  },
  {
    id: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    summary: "Hiểu về an toàn thông tin và liêm chính học thuật trong môi trường số. Xây dựng thói quen bảo vệ thông tin cá nhân và học tập trung thực.",
    objectives: [
      "Hiểu các mối đe dọa an ninh mạng phổ biến",
      "Nắm vững nguyên tắc bảo vệ thông tin cá nhân",
      "Cam kết và thực hành liêm chính học thuật"
    ],
    process: [
      "Nghiên cứu về các loại tấn công mạng và cách phòng tránh",
      "Thiết lập bảo mật cho tài khoản cá nhân",
      "Tìm hiểu về quy định liêm chính học thuật",
      "Thực hành trích dẫn và sử dụng nguồn đúng cách"
    ],
    tools: ["Password Manager", "Google Security Checkup", "Turnitin"],
    analysis: {
      strengths: ["Hiểu rõ tầm quan trọng của an toàn thông tin", "Thực hành trích dẫn đúng chuẩn"],
      improvements: ["Cần thường xuyên cập nhật kiến thức bảo mật", "Nên chia sẻ kiến thức với người khác"],
      lessons: ["An toàn số là trách nhiệm cá nhân", "Liêm chính học thuật là nền tảng của học vấn"]
    },
    aiUsage: [
      "AI hỗ trợ giải thích các khái niệm bảo mật phức tạp",
      "Sử dụng AI để kiểm tra cách trích dẫn",
      "Cam kết không sử dụng AI để gian lận học thuật"
    ],
    evidencePlaceholder: "Tải lên hình ảnh hoặc liên kết minh chứng bài tập"
  }
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="project" onClick={onClick} className="h-full">
        <CardHeader className="pb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
            <project.icon className="w-7 h-7 text-white" />
          </div>
          <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
            {project.chapter}
          </div>
          <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 mb-4">
            {project.summary}
          </CardDescription>
          <div className="flex items-center text-sm text-primary font-medium group">
            <span>Xem chi tiết</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectDialog({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
              <project.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                {project.chapter}
              </div>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription className="mt-2">{project.summary}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="objectives" className="mt-6">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
            <TabsTrigger value="process">Quy trình</TabsTrigger>
            <TabsTrigger value="evidence">Minh chứng</TabsTrigger>
            <TabsTrigger value="analysis">Phân tích</TabsTrigger>
            <TabsTrigger value="ai">AI & Liêm chính</TabsTrigger>
          </TabsList>

          <TabsContent value="objectives" className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Mục tiêu bài tập
            </h4>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="process" className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Quy trình thực hiện
            </h4>
            <div className="space-y-3">
              {project.process.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-sm font-medium">
                    {i + 1}
                  </div>
                  <div className="pt-1.5 text-muted-foreground">{step}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <h5 className="font-medium mb-3">Công cụ sử dụng</h5>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="evidence" className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Image className="w-5 h-5 text-primary" />
              Minh chứng học tập
            </h4>
            <Card variant="outline" className="p-8 border-dashed">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">{project.evidencePlaceholder}</p>
                <Button variant="outline" size="sm">
                  Thêm minh chứng
                </Button>
              </div>
            </Card>
            <p className="text-sm text-muted-foreground italic">
              * Phần này sẽ được bạn cập nhật với các hình ảnh, liên kết file hoặc video minh chứng thực tế.
            </p>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">✓ Điểm mạnh</h4>
              <ul className="space-y-2">
                {project.analysis.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-orange-500">↗ Điểm cần cải thiện</h4>
              <ul className="space-y-2">
                {project.analysis.improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">💡 Bài học rút ra</h4>
              <ul className="space-y-2">
                {project.analysis.lessons.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Sử dụng AI & Liêm chính học thuật
            </h4>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <ul className="space-y-3">
                {project.aiUsage.map((usage, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    {usage}
                  </li>
                ))}
              </ul>
            </Card>
            <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
              <p className="text-sm text-accent font-medium flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Cam kết liêm chính học thuật
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Tôi cam kết mọi nội dung trong bài tập này được viết dựa trên sự hiểu biết cá nhân. 
                AI chỉ được sử dụng như công cụ hỗ trợ, không phải nguồn sao chép trực tiếp.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

const Target = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Dự án</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Các bài tập <span className="gradient-text">học tập</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              6 bài tập từ 6 chương học, mỗi bài là một bước tiến trong hành trình khám phá công nghệ số.
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
