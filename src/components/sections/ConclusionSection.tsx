import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Mountain, Star, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  "Hoàn thành 6 bài tập từ 6 chương học",
  "Nắm vững kiến thức nền tảng về công nghệ số",
  "Phát triển kỹ năng tìm kiếm và đánh giá thông tin",
  "Hiểu và sử dụng AI có trách nhiệm",
  "Xây dựng portfolio học tập chuyên nghiệp",
  "Cam kết liêm chính học thuật trong suốt quá trình"
];

export function ConclusionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conclusion" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Award className="w-4 h-4" />
              <span>Tổng kết</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Kết thúc <span className="gradient-text">hành trình</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Nhìn lại những gì đã đạt được và những bài học quý giá từ môn học.
            </motion.p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              {/* Experience card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card variant="glass" className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Trải nghiệm làm Portfolio</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Việc xây dựng portfolio này là một hành trình đầy thử thách nhưng cũng vô cùng bổ ích. 
                          Tôi không chỉ học cách sử dụng các công cụ số, mà còn học được cách tổ chức, trình bày 
                          và phản tư về quá trình học tập của mình. Mỗi bài tập được thêm vào đây đều là một bước 
                          tiến trong hành trình phát triển bản thân.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card variant="glass" className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                        <Mountain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Khó khăn & Cách vượt qua</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Thách thức lớn nhất là học cách sử dụng AI một cách có trách nhiệm - không phụ thuộc 
                          hoàn toàn vào nó nhưng cũng biết tận dụng sức mạnh của nó. Tôi đã vượt qua bằng cách 
                          luôn tự đặt câu hỏi: "Mình đã thực sự hiểu điều này chưa?" trước khi chấp nhận bất kỳ 
                          gợi ý nào từ AI.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right column - Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card variant="elevated" className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-xl">Những gì đã đạt được</h3>
                  </div>
                  <ul className="space-y-4">
                    {achievements.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Proud moment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 gradient-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="w-24 h-24" />
              </div>
              <CardContent className="p-0 relative z-10">
                <h3 className="font-semibold text-2xl mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  Điều tôi tự hào nhất
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl">
                  Tôi tự hào vì đã duy trì được tinh thần liêm chính học thuật xuyên suốt quá trình. 
                  Mỗi dòng chữ trong portfolio này đều là sản phẩm của sự suy nghĩ và nỗ lực thực sự. 
                  AI đã hỗ trợ tôi, nhưng kiến thức và kỹ năng là của chính tôi. Đó là điều quan trọng 
                  nhất mà tôi học được.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Final commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Card variant="outline" className="p-6 border-2 border-dashed">
              <CardContent className="p-0">
                <p className="text-lg text-foreground font-medium mb-2">
                  🔒 Cam kết Liêm chính Học thuật
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tôi xác nhận rằng website Portfolio này được xây dựng với mục tiêu học tập nghiêm túc. 
                  Mọi nội dung đều do tôi tự viết và tự chịu trách nhiệm. AI được sử dụng như công cụ 
                  hỗ trợ, không phải nguồn sao chép.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
