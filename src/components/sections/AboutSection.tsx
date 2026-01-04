import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Target, Lightbulb, Heart, BookOpen, Code, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const interests = [
  { icon: BookOpen, label: 'Học tập suốt đời' },
  { icon: Code, label: 'Công nghệ & Lập trình' },
  { icon: Cpu, label: 'Trí tuệ nhân tạo' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <User className="w-4 h-4" />
              <span>Về tôi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Xin chào, tôi là{' '}
              <span className="gradient-text">[Tên của bạn]</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sinh viên ngành [Ngành học] với niềm đam mê khám phá công nghệ số và ứng dụng AI trong học tập.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column - Personal info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card variant="glass" className="p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Câu chuyện của tôi</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Tôi là một sinh viên đang trong hành trình tìm hiểu về thế giới số. 
                        Môn học này đã mở ra cho tôi nhiều góc nhìn mới về cách công nghệ 
                        và AI có thể hỗ trợ việc học tập và phát triển bản thân.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">Sở thích & Đam mê</h3>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
                      >
                        <interest.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{interest.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column - Goals */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card variant="elevated" className="p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mục tiêu học tập</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>Nắm vững kiến thức nền tảng về công nghệ số</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>Hiểu và sử dụng AI một cách có trách nhiệm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>Phát triển tư duy phản biện trong môi trường số</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated" className="p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mục tiêu Portfolio</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Portfolio này là nơi tôi tổng hợp hành trình học tập, lưu giữ các 
                        sản phẩm đã hoàn thành, và quan trọng nhất - thể hiện sự tiến bộ 
                        của bản thân qua từng bài học và dự án.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
              "Học không chỉ là tiếp nhận kiến thức, mà còn là hành trình khám phá bản thân 
              và xây dựng nền tảng cho tương lai."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
