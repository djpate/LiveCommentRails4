class Comment < ActiveRecord::Base
  after_save :notify_new_comment

  def notify_new_comment
    redis = Redis.new
    redis.publish("new_comment", self.to_json)
  end

end