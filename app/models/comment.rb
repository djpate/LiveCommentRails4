class Comment < ActiveRecord::Base
  after_save :notify_new_comment

  def notify_new_comment
    redis = Redis.new
    redis.publish("new_comment", {:title => self.title, :content => self.content}.to_json)
  end

end